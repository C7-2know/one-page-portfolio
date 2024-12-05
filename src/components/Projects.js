const Projects=()=>{
    return(
        <div id="carousel"  className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="S lide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3" ></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4" ></button>

            </div>
            <div className="carousel-inner border">
                <div className="carousel-item active  w-100">
                    <img src="blog.PNG" className="d-block img-fluid h-25 " alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Blog Full stack App </h5>
                        <p>A full stack website made using Golang and React</p>
                        <p>It includes Authentication, Autherization and cloud imgae storage service</p>
                    </div>
                </div>
                <div className="carousel-item w-100">
                    <img src="ride.PNG" className="d-block img-fluid h-25" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>RideShare</h5>
                        <p>Internship company's project</p>
                        <p>Using NextJS and .NET </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="port.PNG" className="d-block img-fluid h-25" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>My Portfolio</h5>
                        <p>Using React</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="ecom.PNG" className="d-block img-fluid h-25" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Ecommerce Frontend project</h5>
                        <p>Using React and dsyncfusion</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Projects;