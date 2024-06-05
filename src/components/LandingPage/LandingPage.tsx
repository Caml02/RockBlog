import Contact from "../Contact/Contact";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Image from "next/image";
import Article1 from "@/img/Article1.jpg";
import Article2 from "@/img/Article2.jpg";
import Article3 from "@/img/Article3.jpg";
import Link from "next/link";


const LandingPage = () => {
    return (
        <>
            <NavBar />
            <Contact name={""} subject={""} phone={""} email={""} />

            {/**First and Second Article */}
            <div className="w-100 mt-5 d-flex">
                <div className="card mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <Image 
                                className="card-img-top"
                                src={Article1}
                                alt="..."
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Kelsi Monahan</h5>
                                <p className="card-text fw-bold fs-3 text-warning">Qui occaecati vero et quibusdam non</p>
                                <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit asperiores dolorem libero. Nobis</small></p>
                                    <Link className="button" href="/Concert">
                                        Read More
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <Image 
                                className="card-img-top"
                                src={Article2}
                                alt="..."
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Mrs. Alexanne Schneider</h5>
                                <p className="card-text fw-bold fs-3 text-warning">Arquitecto quos rem unde quia accusantium</p>
                                <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit asperiores dolorem libero. Nobis</small></p>
                                    <Link className="button" href="/Concert">
                                        Read More
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-5">
                                    <Image 
                                        className="card-img-top"
                                        src={Article3}
                                        alt="..."
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Mrs. Alexanne Schneider</h5>
                                        <p className="card-text fw-bold fs-3 text-warning">Arquitecto quos rem unde quia accusantium</p>
                                        <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit asperiores dolorem libero. Nobis</small></p>
                                        <Link className="button" href="/Concert">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>

                <div className="w-100 mt-5">
                <div className="row">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <Image 
                                        className="card-img-top"
                                        src={Article3}
                                        alt="..."
                                        width={250}
                                        height={250}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Ibrahim Statterfield</h5>
                                        <p className="card-text fw-bold fs-3 text-warning">Deleniti et omnis aliquid consequuntur</p>
                                        <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit asperiores dolorem libero. Nobis</small></p>
                                        <Link className="button" href="/Concert">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/**Footer  */}
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
} 

export default LandingPage;