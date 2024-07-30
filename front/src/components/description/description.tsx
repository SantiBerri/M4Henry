import React from 'react'
import correo from '@/components/description/images/envios.jpg'
import Image from 'next/image'

const Description = () => {
  return (
    <div className='bg-gray-100 p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <p className='text-lg text-gray-700 leading-relaxed'>
          En Hardtech, nos comprometemos a ofrecer un servicio de envío eficiente y seguro para que tus electrodomésticos lleguen en perfectas condiciones y a tiempo. Realizamos envíos a nivel nacional con opciones de entrega estándar y exprés, adaptándonos a tus necesidades y ubicación. Todos los pedidos son procesados y despachados en un plazo de 1 a 3 días hábiles, y recibirás un número de seguimiento para monitorear el progreso de tu envío en tiempo real. Además, ofrecemos opciones de envío gratuito para compras que superen un determinado monto. Si surge algún inconveniente con la entrega, nuestro equipo de atención al cliente está disponible para asistirte y resolver cualquier incidencia rápidamente, garantizando tu satisfacción y confianza en nuestro servicio.
        </p>
        <div className='flex justify-center'>
          <Image
            src={correo}
            alt="Imagen de envío"
            className='rounded-lg shadow-md'
            width={400}
            height={300}
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Description