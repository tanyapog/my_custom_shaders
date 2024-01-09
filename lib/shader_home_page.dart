import 'dart:async';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:my_custom_shaders/shader_painter.dart';

class ShaderHomePage extends StatefulWidget {
  const ShaderHomePage({super.key});

  @override
  State<ShaderHomePage> createState() => _ShaderHomePageState();
}

class _ShaderHomePageState extends State<ShaderHomePage> {
  late Timer timer;
  double delta = 0;
  FragmentShader? shader;

  void loadMyShader() async {
    var program = await FragmentProgram.fromAsset('shaders/wavy_stripes.frag');
    shader = program.fragmentShader();
    setState(() {}); // trigger a repaint
    timer = Timer.periodic(
        const Duration(milliseconds: 16),
        (timer) => setState(() => delta += 1/60),
    );
  }

  @override
  void initState() {
    super.initState();
    loadMyShader();
  }


  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return shader == null
        ? const Center(child: CircularProgressIndicator())
        : CustomPaint(painter: ShaderPainter(shader!, delta));
    }
}