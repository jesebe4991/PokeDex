import BlogNavbar from "../components/BlogNavbar"

const About = () => {
  return (
    <div className='mb-20'>
        <BlogNavbar />
        <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-600'>Hola Bienvenidos al Pokeblog</h1>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            Este es un blog de pokemones y lo mas importante es que es gratis y gratuito y es lo mas importante en todo lo que hacemos en internet
        </p>
        <p className='mx-auto leading-relaxed text-base mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, reprehenderit nobis quibusdam corporis nam saepe explicabo quaerat veniam magnam, minima ea, repellat est fuga vel deleniti quis ratione vero! Corporis!
        </p>
    </div>
  )
}

export default About