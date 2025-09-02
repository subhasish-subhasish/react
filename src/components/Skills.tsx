// src/components/Skills.tsx
export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
        <li>C, C++ (OOPS)</li>
        <li>Python</li>
        <li>Verilog, SystemVerilog</li>
        <li>Vivado, Vitis, ModelSim</li>
        <li>STM32 CubeIDE, Arduino, MATLAB</li>
        <li>FPGA, STM32, ESP32, 8051</li>
        <li>Protocols: I2C, SPI, UART, CAN</li>
        <li>Git, Linux, Windows</li>
      </ul>
    </section>
  );
}
