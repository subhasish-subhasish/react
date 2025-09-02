// src/components/Projects.tsx
export default function Projects() {
  return (
    <section id="projects" className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">STM32 Peripheral Driver Development</h3>
          <p className="text-sm text-gray-600">Custom drivers for GPIO, SPI, USART, I2C on STM32F4.</p>
          <a href="https://github.com/subhasish-subhasish/stm32f401reDriver" target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">IoT Temp & Humidity Monitoring</h3>
          <p className="text-sm text-gray-600">ESP32 + DHT11 + Firebase for cloud-based real-time monitoring.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">12-Hour Digital Clock on FPGA</h3>
          <p className="text-sm text-gray-600">SystemVerilog design with timekeeping logic on Artix-7 FPGA.</p>
        </div>
      </div>
    </section>
  );
}
