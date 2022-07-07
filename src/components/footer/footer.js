import '../footer/footer.css';
import '../responsive.css';

function Footer() {
    return (
        <div className="foot">
            <div class="red-social" >
                <a target="_blank" href='https://instagram.com/sara_du248?igshid=YmMyMTA2M2Y=' className='itemRed' rel='noreferrer'><i class="fa-brands fa-instagram fa-lg"></i> sara_du248</a>
                <a target="_blank" href='https://github.com/luciaduque248' className='itemRed' rel='noreferrer'><i class="fa-brands fa-github fa-lg"></i> luciaduque248</a>
                <a target="_blank" href='https://www.linkedin.com/in/sara-lucia-duque-parra-98676b223' className='itemRed' rel='noreferrer'><i class="fa-brands fa-linkedin"></i> Sara Lucia Duque Parra</a>
                <a target="_blank" href='https://wa.link/5gmghk' className='itemRed' rel='noreferrer'><i class="fa-solid fa-phone"></i> +57 313 356 8387</a>
                <a target="_blank" href='mailto:luciaduque248@gmail.com' className='itemRed' rel='noreferrer'><i class="fa-solid fa-at"></i> luciaduque248@gmail.com</a>
            </div>
            
        </div>

    )
}

export default Footer;