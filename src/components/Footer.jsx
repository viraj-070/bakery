import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-fit px-4 md:px-0 py-9 max-w-7xl mx-auto bg-[#212529] flex flex-col md:flex-row justify-between items-start gap-4 text-white">
      <div className="w-full md:w-4/10  flex flex-col gap-2">
        <img className="w-[100px]" src="./logo.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut
          repellendus natus ipsa quo soluta vitae voluptas, reiciendis labore,
          enim, quis in. Ipsum iure tempore eos necessitatibus delectus iste
          architecto sunt nisi, voluptas reiciendis, pariatur eligendi sit illum
          corrupti? Omnis quis laborum.
        </p>
      </div>
      <div className="w-full md:w-2/10 gap-4 flex flex-col">
        <h1 className="text-2xl font-black ">Quick Links</h1>
        <ul className="flex flex-col gap-3">
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-full md:w-4/10 ">
        <h2 className="m-0 mb-3 text-2xl font-black  ">Bakery Location</h2>
        <div>
          <iframe
            className="rounded-4 h-[240px] border-4 border-accent rounded-3xl w-full w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120637.9498952214!2d74.66027017683541!3d19.110466281536844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707735870661!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer