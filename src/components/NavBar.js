import fotito from '../img/BLlogo-printmey-Completo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav class="nav navbar-expand-lg navbar-light bg-info text-dark">

            <img class="ps-4"    src={fotito} alt="..." height="130"/>

            <div class="container-fluid">
            
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul class="navbar-nav justify-content-center">
                        <li class="nav-item m-5">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item m-5">
                            <a class="nav-link" href="#">Tienda</a>
                        </li>
                        <li class="nav-item m-5">
                            <a class="nav-link" href="#">Ofertas</a>
                        </li>
                        <li class="nav-item m-5">
                            <a class="nav-link" href="#">¿Quienes somos?</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;