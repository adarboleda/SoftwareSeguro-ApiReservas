USE hotel_reservas;

-- Insertar Hoteles de prueba
INSERT INTO hoteles (nombre, direccion, estrellas, telefono) VALUES 
('Hotel Paraíso', 'Calle 123, Playa Norte', 4, '555-1234'),
('Gran Hotel Centro', 'Av. Principal 45, Centro', 5, '555-9876'),
('Hostal del Parque', 'Plaza Central 89', 3, '555-4321');

-- Insertar Clientes de prueba
INSERT INTO clientes (nombre, email, telefono) VALUES 
('Juan Pérez', 'juan.perez@email.com', '555-1111'),
('María García', 'maria.g@email.com', '555-2222'),
('Carlos López', 'carlos.lopez@email.com', '555-3333');

-- Insertar Reservas de prueba
INSERT INTO reservas (fecha_entrada, fecha_salida, num_huespedes, hotel_id, cliente_id) VALUES 
('2025-05-01', '2025-05-07', 2, 1, 1),
('2025-06-15', '2025-06-20', 1, 2, 2),
('2025-07-10', '2025-07-15', 4, 3, 3);
