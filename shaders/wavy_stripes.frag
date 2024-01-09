#include <flutter/runtime_effect.glsl>

uniform vec2 uSize; // the size of the object being rendered. Constant value passed from the Flutter.
uniform float iTime; // the time elapsed since the shader was started
vec2 iResolution; // screen resolution. Used to adjust the size and position of the objects being rendered

// output variable that stores the final color of the object being rendered.
// The value of this variable is then passed back to the CPU to be displayed on the screen.
out vec4 fragColor;

#define PI 3.1415926535897932384626433832795

void main(void) {

    iResolution = uSize;
    vec2 fragCoord = FlutterFragCoord();

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