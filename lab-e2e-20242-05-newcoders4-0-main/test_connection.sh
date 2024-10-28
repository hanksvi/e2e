#!/bin/bash

# Esperar a que el endpoint de prueba esté disponible
until $(curl --output /dev/null --silent --head --fail http://localhost:8080/auth/test/connection); do
    printf '.'
    sleep 5
done

# Realizar la solicitud al endpoint de prueba
response=$(curl -s -X GET http://localhost:8080/auth/test/connection)

# Imprimir la respuesta
echo "Response: $response"

# Verificar que la respuesta no esté vacía
if [ -z "$response" ]; then
  echo "Error: Empty reply from server"
  exit 1
fi
