import './NavBar.css'


export const NavBar = () => {

    const fecha = '20240604'
    
    return(
        <div className='contenedor'>
        <h1>Esto es un NavBar</h1>
        <h2>Productos</h2>
        <p>Hoy es: {fecha}</p>
        <img src='/vite.svg'/>
        </div>
    );
};
