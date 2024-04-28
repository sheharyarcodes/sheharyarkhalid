import React from "react";
import { Container } from "../../components";
import ProjectCard from "./child/ProjectsCard";
import blogAppImg from "../../assets/projectsImage/blogAppImg.png";
import ecommerceWebsiteImg from "../../assets/projectsImage/ecommerceWebsiteImg.png";
import imdbCloneImg from "../../assets/projectsImage/imdbCloneImg.png";
import { v4 as uuid } from "uuid";

const Projects = () => {
  const items = [
    {
      id: uuid(),
      title: "Blog app with authentication",
      description:
        "This blog-app is a robust platform built using React and Redux, offering a seamless blogging experience. With full authentication integration, users can securely sign in, create, and manage their blog posts. The layout is meticulously designed to be responsive as heck, ensuring an optimal viewing experience across devices of all sizes. Whether you're on a desktop, tablet, or mobile device, you'll enjoy a smooth and intuitive browsing experience. Dive into the world of blogging with confidence, knowing that this app has your back every step of the way.",
      imgPath: blogAppImg,
      githubLink: "https://github.com/sheharyarcodes/blog-app",
      demoLink: "https://blog-app-sigma-indol.vercel.app",
    },
    {
      id: uuid(),
      title: "IMDb Clone",
      description:
        "This imdb-clone is a project aimed at replicating some of the core functionalities of the popular IMDb website. By leveraging React and TMDb's API, I've created a platform where users can browse through a vast collection of movies, view details, watch trailers, and more.",
      imgPath: imdbCloneImg,
      githubLink: "https://github.com/sheharyarcodes/imdb-clone",
      demoLink: "https://imdb-clone-red-one.vercel.app",
      isFlexReverse: true,
    },
    {
      id: uuid(),
      title: "E-commerce Website",
      description:
        "Step into the world of effortless shopping with our sleek ecommerce website, powered by React, Tailwind CSS, and Redux. Dive into a diverse selection of products sourced from FakeStoreAPI, organized neatly into categories for your convenience. Whether you're searching for fashion-forward apparel, cutting-edge electronics, or chic accessories, our intuitive interface makes browsing a breeze. With the ability to add new products and seamlessly add items to your cart, shopping has never been easier. Explore, shop, and enjoy a streamlined shopping experience with us today.",
      imgPath: ecommerceWebsiteImg,
      githubLink: "https://github.com/sheharyarcodes/ecommerce-website",
      demoLink: "https://ecommerce-website-phi-sandy.vercel.app",
    },
  ];
  return (
    <section id="projects">
      <Container className="px-10 pt-28">
        <h2 className=" text-center text-gray-900 font-bold text-3xl sm:text-6xl mb-8 md:mb-20">
          My Recent Projects.
        </h2>
        {/* <p>Here are a few projects I've worked on recently.</p> */}
        <div className=" w-full flex flex-col items-center gap-16">
          {items.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
