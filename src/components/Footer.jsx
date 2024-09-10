const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-profile",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: "fab fa-github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-username",
      icon: "fab fa-twitter",
    },
    // Add more social links as needed
  ];

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="flex justify-center mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-4 transition duration-300"
            >
              <i className={`${link.icon} fa-2x`}></i>
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
