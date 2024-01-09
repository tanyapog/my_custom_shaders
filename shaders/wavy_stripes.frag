#define PI 3.1415926535897932384626433832795

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 center = fragCoord/iResolution.xy - vec2(0.5, 0.5);

    float dist = length(center);
    float p = (atan(center.y,center.x)) / (2.0 * PI);
    float numStripes = 12.0;

    bool stripeA = mod(floor((p * numStripes) + (sin(dist * 10.0 + sin(iTime)))), 2.0) == 1.0;
    bool stripeB = mod(floor((p * numStripes) - (sin(dist * 10.0 + cos(iTime)))), 2.0) == 1.0;

    vec3 col;

    if (stripeA && stripeB)
    {
        col = vec3(0.4);
    }
    else if (!stripeA && stripeB)
    {
        col = vec3(0.5, 0.2, 0.1);
    }
    else if (stripeA && !stripeB)
    {
        col = vec3(0.3, 0.2, 0.1);
    }
    else
    {
        col = vec3(0.7);
    }

    fragColor = vec4(col,1.0);
}