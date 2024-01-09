import 'package:flutter/material.dart';

class ShaderHomePage extends StatelessWidget {
  const ShaderHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Custom shaders'),
      ),
      body: const Center(
        child: Text('You have pushed the button this many times:'),
      ),
    );
  }
}