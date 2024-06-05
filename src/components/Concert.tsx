import Contact from "./Contact/Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Image from "next/image";
import MainArticle from "@/img/MainArticle.jpg"


const Concert = () => {
    return (
        <>  
            <NavBar />
            <Contact name={""} subject={""} phone={""} email={""} />
            <div className="container mt-5 vh-100">
                <div className="card mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <Image 
                                src={MainArticle}
                                className="card-img-top" 
                                alt="..." 
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Rock & Roll Concert</h5>
                                <p className="card-text fw-bold fs-3 text-warning">Arquitecto quos rem unde quia accusantium</p>
                                <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit asperiores dolorem libero. Nobis</small></p>                            
                                <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit asperiores dolorem libero. Nobis
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur praesentium explicabo quod? Debitis nihil iusto sapiente laborum quaerat.
                                 perferendis, asperiores sunt minus a nesciunt voluptatum fuga officiis, doloremque quia!
                                </small></p>                           
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Concert;