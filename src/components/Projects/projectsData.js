const projects = [
  {
    title: "Bono",
    src: "bono.png",
    role: "UI/UX Designer & Full stack Developer",
    desc: "A restaurant management system that is actively running inside a cafe",
    description: `
      <p>Bono is a SaaS restaurant management system designed to streamline operations and elevate the dining experience. It redefines order handling by reducing waiter-customer interaction through a QR code system placed on tables. Customers scan the code, browse the menu, place orders, and track their preparation in real-time. Once the order is marked "done," waiters are notified to deliver the food. Payments are simplified with multiple API integrations like Telebirr, Cbebirr, and Chapa, allowing customers to pay online and leave at their convenience.</p>
      <p><strong>Using QR codes placed on tables, customers can:</strong></p>
      <ol>
        <li>Scan the code to access the menu.</li>
        <li>Place orders directly through the platform.</li>
        <li>Track the order status in real-time.</li>
        <li>Mark orders as 'done,' notifying waiters for delivery.</li>
        <li>Make payments online via integrations with Telebirr, Cbebirr, Chapa, and more.</li>
      </ol>
      <p><strong>The platform includes three primary actors:</strong></p>
      <ul>
        <li><strong>Admin:</strong> Manages operations, accesses analytics for tax, income, and performance reporting.</li>
        <li><strong>Cashier:</strong> Oversees payment processing and customer transactions.</li>
        <li><strong>Chef:</strong> Tracks and updates order statuses while monitoring preparation times.</li>
      </ul>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Real-time notifications using WebSockets for instantaneous updates across devices.</li>
        <li>Advanced analytics to improve restaurant efficiency and provide actionable insights.</li>
        <li>Multi-API payment integration for seamless transactions.</li>
      </ul>
      <p>Bono was collaboratively developed with two other developers and is currently running successfully in a cafe, showcasing its ability to optimize operations and improve customer satisfaction.</p>
   <div>
      <h4>Problem Solver Focus</h4>
      <p>When developing Bono, I aimed to solve key challenges restaurants face in managing orders and payments. The result was a SaaS platform that empowers restaurants to streamline operations and offer a modern dining experience.</p>
      <p>I personally handled:</p>
      <ol>
        <li>Crafting the user experience for customers, from scanning QR codes to real-time order tracking and seamless online payments.</li>
        <li>Tackling the technical challenge of real-time communication by implementing WebSocket integration in Django.</li>
        <li>Architecting the back-end to handle advanced analytics for admins, such as time-to-completion metrics and income reporting.</li>
        <li>Crafting the UI/UX design and attributes that have both the customers and the administrators in mind for an easier user experience.</li>
        <li>Creating and managing the Front-end development.</li>
        </ol>
      <p><strong>Impact of My Work:</strong> Bono has been instrumental in optimizing operations for a restaurant client, reducing their order processing time by 40% and increasing efficiency.</p>
      <p>This project reflects my ability to identify real-world problems, design effective solutions, and deliver results that matter. Bono is currently operational in a cafe, showcasing its value in a live environment.</p>
    </div>
      

    <div>
      <h4>My Role</h4>
<p>Bono stands as one of my proudest achievements, where I played a pivotal role in its development. I took the lead in designing and implementing this SaaS restaurant management system to streamline restaurant operations and elevate customer experiences.</p>
<p>My contributions to the project included:</p>
<ol>
  <li>Designing the customer journey to ensure smooth interactions, from scanning QR codes to tracking orders and completing payments online.</li>
  <li>Developing a robust admin dashboard to provide detailed analytics for tax reporting, income tracking, and performance evaluation.</li>
  <li>Solving complex technical challenges, including implementing real-time notifications using WebSockets and integrating multiple payment gateways for seamless transactions.</li>
</ol>

      
    </div>

    
      
       `,
    color: "#000000",
    tech: "React, JWT, Django, PostgreSQL, Rails",
    slug: "bono",
  },
  {
    title: "PVS",
    src: "pvss.png",
    role: "Lead Mobile Developer & API Integrator",
    desc: "A payment verification app built to tackle fraudulent payment practices in Ethiopia.",
    description: `
      <p>PVS (Payment Verification System) is a mobile app specifically designed to address the issue of fraudulent payment practices in Ethiopia. Shop owners and staff often face customers presenting fake screenshots or counterfeit QR codes of transactions to claim they have paid. PVS ensures secure and reliable verification of payments by directly validating transactions through APIs like CBE Birr and Telebirr.</p>
      <p><strong>How PVS Solves the Problem:</strong></p>
      <ol>
        <li>Users log in to the app securely using their credentials.</li>
        <li>When a customer claims to have made a payment, they present a QR code as proof.</li>
        <li>The app scans the QR code and directly validates the transaction against the payment provider's database in real-time, eliminating the risk of fake screenshots or QR codes.</li>
        <li>Transaction history is securely stored for future reference, ensuring full transparency and accountability.</li>
        <li>Users can also access live statistics and financial reports remotely, enabling better business management and oversight.</li>
      </ol>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>QR code scanning for instant and secure payment verification.</li>
        <li>Secure login and remote access to live statistics and financial data.</li>
        <li>Financial reporting tools for managing revenue, analyzing trends, and generating detailed reports.</li>
        <li>Transaction history tracking for accountability and fraud prevention.</li>
      </ul>
      <p>PVS was developed to empower businesses to counter fraud, improve efficiency, and manage finances effectively.</p>
    <div>
      <h4>Problem Solver Focus</h4>
      <p>PVS was built to tackle the widespread issue of fraudulent payment claims, such as fake screenshots and counterfeit QR codes. By integrating directly with payment providers, the app eliminates guesswork and ensures that every transaction is legitimate.</p>
      <p>I personally handled:</p>
      <ol>
        <li>Designing the user workflow to make payment verification fast and intuitive.</li>
        <li>Developing the QR code scanner for real-time validation.</li>
        <li>Implementing secure authentication to ensure remote access for business owners.</li>
        <li>Building the financial reporting module to give users detailed insights into revenue and trends.</li>
        <li>Architecting the back-end with Node.js and MongoDB for secure and scalable data storage.</li>
        <li>Optimizing the app for real-world business environments, ensuring reliability and performance.</li>
      </ol>
      <p><strong>Impact of My Work:</strong> PVS has helped businesses eliminate fraudulent transactions, reduced payment verification time by 60%, and provided robust financial tools to improve business oversight.</p>
      <p>This project highlights my ability to tackle real-world problems with user-focused design and technical innovation.</p>
    </div>
      
    <div>
      <h4>My Role</h4>
<p>As the lead developer of PVS, I focused on solving a critical issue for businesses in Ethiopia: verifying payments securely and preventing fraud. My role was pivotal in ensuring the app's functionality and effectiveness.</p>
<p>My contributions included:</p>
<ol>
  <li>Developing the mobile app with React Native, creating a seamless user experience for payment verification.</li>
  <li>Designing and implementing the QR code scanner to identify fake transactions instantly.</li>
  <li>Building financial reporting tools to help users manage and analyze their revenue and trends.</li>
  <li>Architecting a secure back-end system using Node.js and MongoDB for transaction logging and data management.</li>
  <li>Ensuring the app's usability in diverse business settings, from small shops to larger enterprises.</li>
</ol>
<p><strong>Tech Stack:</strong> React Native, Node.js, Express, MongoDB, CBE Birr API, Telebirr API</p>
    </div>
    `,
    color: "#8cd965",
    tech: "React Native, Node.js, Express, MongoDB",
    slug: "pvs",
  },
  {
    title: "Tera",
    src: "tera.png",
    role: "Lead Full-Stack Developer & UI/UX Designer",
    desc: "A parcel locker solution revolutionizing package delivery and collection in Addis Ababa.",
    description: `
      <p>Tera is a smart parcel locker solution currently under development in Addis Ababa. It is designed to provide a secure, automated, and efficient way for users to send, store, and collect parcels. With Tera, users can enjoy a seamless experience, bypassing traditional delivery challenges such as missed deliveries or theft. The system combines hardware and software to manage parcel lockers, ensuring users can access their packages conveniently and securely.</p>
      
      <p><strong>How Tera Works:</strong></p>
      <ol>
        <li>Users register and log in to the platform via a mobile or web app.</li>
        <li>When sending or receiving parcels, the system generates a unique code for locker access.</li>
        <li>Senders deposit parcels in a designated locker by scanning the code, ensuring secure storage.</li>
        <li>Recipients receive a notification with a code to retrieve their parcel from the locker at their convenience.</li>
        <li>Locker status, user history, and analytics are managed via the admin dashboard.</li>
      </ol>
      
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Secure locker access with unique codes and real-time notifications.</li>
        <li>Automated parcel management system for senders, recipients, and administrators.</li>
        <li>User-friendly web and mobile apps for managing transactions and tracking parcels.</li>
        <li>Admin dashboard to monitor locker availability, parcel status, and analytics.</li>
        <li>Integration with SMS and email services for instant notifications.</li>
      </ul>
      
      <p>Tera aims to revolutionize parcel delivery and collection by addressing challenges like theft, inefficiency, and delivery delays while offering convenience to users.</p>
      
      <div>
        <h4>Problem Solver Focus</h4>
        <p>The main problem Tera addresses is the lack of a secure and efficient parcel delivery system in Addis Ababa. Many users experience issues with missed deliveries, theft, or delays. Tera solves this by providing a reliable and automated locker-based system that users can trust.</p>
        <p>I personally handled:</p>
        <ol>
          <li>Designing an intuitive user experience for both mobile and web platforms.</li>
          <li>Developing the admin dashboard for real-time locker and parcel management.</li>
          <li>Integrating secure authentication and unique code generation for parcel transactions.</li>
          <li>Creating a scalable back-end system with Node.js, Express, and MongoDB to handle locker status and user data.</li>
          <li>Optimizing notification systems using SMS and email APIs for seamless communication.</li>
        </ol>
        <p><strong>Impact of My Work:</strong> Although still in development, Tera is poised to transform parcel delivery in Addis Ababa by providing a modern, secure, and automated solution.</p>
        <p>This project highlights my ability to integrate hardware and software solutions to address real-world challenges effectively.</p>
      </div>
      
      <div>
        <h4>My Role</h4>
        <p>As the lead developer for Tera, I was responsible for driving the project from concept to implementation, ensuring both functionality and user satisfaction. My role included:</p>
        <ol>
          <li>Designing and implementing the front-end for web and mobile platforms using React.</li>
          <li>Building a robust back-end system with Node.js, Express, and MongoDB for managing lockers and user data.</li>
          <li>Integrating secure authentication and code generation for locker transactions.</li>
          <li>Collaborating on the hardware-software integration to ensure smooth operation of the locker system.</li>
          <li>Creating a scalable notification system to keep users informed in real-time.</li>
        </ol>
        <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
        <p>Tera showcases my ability to develop innovative solutions that merge software and hardware for real-world impact. The system is currently under development, with promising potential to improve parcel management in Addis Ababa.</p>
      </div>
    `,
    color: "#8cd965",
    tech: "React, Node.js, Express, MongoDB",
    slug: "tera",
  },
  {
    title: "Negus",
    src: "negus.png",
    role: "UI/UX designer & Front-End Developer",
    desc: "A concept website for Negus Drinks using Three.js and React Three Fiber.",
    color: "#8cd965",
    tech: "React, Three.js, React Three Fiber",
    description:
      "A 1-page concept website for Negus Drinks featuring a custom 3D model of their drink, built with Three.js and React Three Fiber to create an immersive and interactive experience.",
    slug: "negus",
  },
  {
    title: "Mela",
    src: "mela.png",
    desc: "A concept 1-page website for an investment group, built with Three.js, React Three Fiber, and GSAP animations.",
    color: "#8cd965",
    tech: "React, Three.js, React Three Fiber, GSAP",
    description:
      "A visually engaging 1-page concept website for Mela, an investment group company. The website features smooth animations and an immersive experience achieved through the use of Three.js, React Three Fiber, and GSAP. It showcases a modern and interactive design tailored to capture the essence of a forward-thinking investment group.",
    slug: "mela",
  },
  {
    title: "Evently",
    src: "event.png",
    role: "Lead Full-stack Developer & UI/UX Designer",
    desc: "An event management platform for organizers and attendees.",
    description: `
      <p>Evently is a comprehensive event management platform designed to simplify the planning and execution of events. The platform caters to event organizers and attendees by offering features that enhance communication, ticketing, and attendee engagement. Its user-friendly interface ensures smooth interactions across all stages of an event lifecycle.</p>
      <p><strong>Evently allows organizers to:</strong></p>
      <ol>
        <li>Create customizable event pages with details like schedules, speakers, and maps.</li>
        <li>Manage ticket sales, track registrations, and generate unique QR codes for each attendee.</li>
        <li>Send automated reminders and updates to attendees.</li>
        <li>Access advanced analytics on ticket sales, attendee demographics, and post-event feedback.</li>
      </ol>
      <p><strong>Evently offers attendees:</strong></p>
      <ol>
        <li>A seamless ticket purchase process via integrated payment gateways like PayPal and Stripe.</li>
        <li>Event updates and reminders for better planning.</li>
        <li>QR code-based check-in for hassle-free entry.</li>
        <li>Interactive features like live polls and Q&A during events.</li>
      </ol>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Dynamic event page customization with drag-and-drop components.</li>
        <li>Real-time ticketing and attendee tracking using WebSockets.</li>
        <li>Multi-API payment integration for global coverage.</li>
        <li>Comprehensive analytics for event performance insights.</li>
      </ul>
      <p>Evently is a collaborative effort, successfully implemented for multiple events across various industries. It empowers organizers to deliver engaging and seamless experiences to attendees.</p>
   <div>
      <h4>Problem Solver Focus</h4>
      <p>When developing Evently, I focused on addressing challenges faced by both organizers and attendees in event management. The result is a SaaS platform that simplifies event planning, ticketing, and attendee engagement.</p>
      <p>I personally handled:</p>
      <ol>
        <li>Crafting the user experience for both organizers and attendees, ensuring intuitive workflows and seamless interactions.</li>
        <li>Building a dynamic event page editor with real-time previews for organizers.</li>
        <li>Implementing secure QR code ticketing with real-time verification at check-in.</li>
        <li>Integrating global payment gateways like PayPal and Stripe for hassle-free ticket purchases.</li>
        <li>Developing analytics dashboards to help organizers measure success and gather actionable insights.</li>
        </ol>
      <p><strong>Impact of My Work:</strong> Evently has been instrumental in helping event organizers increase ticket sales by 25% and improve attendee satisfaction, as measured through feedback surveys.</p>
      <p>This project highlights my ability to create scalable solutions, address user pain points, and deliver impactful results. Evently is currently live and has been used to manage events ranging from corporate seminars to music festivals.</p>
    </div>
      
    <div>
      <h4>My Role</h4>
<p>Evently represents a milestone in my development career, where I led the charge in designing and implementing this end-to-end event management solution. I worked to ensure that the platform was scalable, user-friendly, and feature-rich.</p>
<p>My contributions to the project included:</p>
<ol>
  <li>Designing and developing the user-friendly interface with React for both organizers and attendees.</li>
  <li>Creating secure and efficient back-end systems with Node.js and MongoDB to handle ticketing, payments, and analytics.</li>
  <li>Solving complex challenges such as real-time QR code verification and multi-API payment integration.</li>
  <li>Leading a team of developers to deliver the project on time while maintaining high-quality standards.</li>
</ol>
      <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, WebSockets, Stripe API, PayPal API</p>
      <p>Evently is now actively used for events of all sizes, showcasing my ability to build systems that make a real-world impact.</p>
    </div>
    `,
    color: "#1E90FF",
    tech: "React, Node.js, Express, MongoDB, WebSockets",
    slug: "sergegna",
  },
  {
    title: "Wedding Thank You Website",
    src: "betty.png",
    role: "Full-stack Developer & UI/UX Designer",
    desc: "A website where guests can download wedding photos and thank you cards, and upload their own wedding photos.",
    color: "#8cd965",
    tech: "WordPress",
    description: `<p><strong>Description:</strong> A website where guests can download wedding photos and thank you cards, and upload their own wedding photos.</p>
  <p><strong>Technologies Used:</strong> WordPress</p>
  <p><strong>Details:</strong></p>
  <p>The Wedding Thank You Website is designed to give guests a personalized experience after attending a wedding. The website allows guests to download photos taken during the event and a thank you card, creating a lasting memory. Additionally, the platform enables guests to upload their own photos taken during the wedding, offering a collaborative experience. Built on WordPress, this platform is easy to manage, offering a smooth and simple interface for both the wedding couple and their guests.</p>
  <div>
    <h4>Problem Solver Focus</h4>
    <p>While working on the Wedding Thank You Website, my focus was on providing an easy-to-use platform that helped couples share memories with their guests and allow the guests to share their own photos.</p>
    <p>My personal contributions included:</p>
    <ol>
      <li>Designing an intuitive interface for both guests and wedding couples to ensure smooth navigation and interaction.</li>
      <li>Implementing secure photo upload functionality, allowing guests to contribute without hassles.</li>
      <li>Ensuring that photos and thank-you cards could be downloaded easily and shared with the guests.</li>
    </ol>
    <p><strong>Impact of My Work:</strong> The platform created a seamless, personalized way for wedding couples to share memories, and it helped guests feel more engaged in the post-wedding experience.</p>
  </div>
  <div>
    <h4>My Role</h4>
    <p>I played a central role in designing and developing the Wedding Thank You Website, ensuring it met the needs of both the wedding couple and their guests.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Creating a user-friendly interface with WordPress for easy customization and management.</li>
      <li>Designing a smooth photo upload and download process to foster collaboration among guests.</li>
      <li>Implementing a system for the guests to download thank-you cards and wedding photos with minimal friction.</li>
    </ol>
    <p><strong>Tech Stack:</strong> WordPress</p>
    <p>The Wedding Thank You Website offers a fun and practical way for couples to share their wedding experience while creating lasting memories for their guests.</p>
  </div>
  `,
    slug: "wedding-thank-you-website",
  },
  {
    title: "Gebeya",
    src: "gebeya.png",
    desc: "An eCommerce website with affiliate marketing, order tracking, payment APIs, and inventory management.",
    color: "#8cd965",
    tech: "React, Node, PostgreSQL",
    description: `<h3>Gebeya</h3>
  <p><strong>Description:</strong> An eCommerce website with affiliate marketing, order tracking, payment APIs, and inventory management.</p>
  <p><strong>Technologies Used:</strong> React, Node, PostgreSQL</p>
  <p><strong>Details:</strong></p>
  <p>Gebeya is an eCommerce platform designed to support various functionalities like affiliate marketing, order tracking, and seamless payment integrations. The platform provides an intuitive experience for customers, enabling them to track their orders and interact with affiliate marketing links. It includes powerful backend management tools such as inventory tracking and reporting, giving admins full control over the platform's operation. Built with React on the front-end and Node/Express with PostgreSQL on the back-end, Gebeya offers a robust, scalable solution for businesses looking to enhance their online presence.</p>
  <div>
    <h4>Problem Solver Focus</h4>
    <p>Gebeya was built to address the challenges of managing a growing eCommerce business, including order tracking, inventory management, and supporting affiliate marketing.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Designing the user experience to ensure a smooth flow from product browsing to checkout.</li>
      <li>Building out the back-end systems for efficient order tracking and payment processing.</li>
      <li>Creating a robust inventory management system to help businesses stay on top of stock levels and optimize their product offerings.</li>
    </ol>
    <p><strong>Impact of My Work:</strong> Gebeya provided a comprehensive solution for businesses, enabling them to manage inventory, track orders, and integrate payment APIs for a streamlined online shopping experience.</p>
  </div>

  <div>
    <h4>My Role</h4>
    <p>As the lead developer on Gebeya, I took ownership of both the front-end and back-end development, ensuring the platform was feature-rich and scalable.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Developing the front-end using React to create a dynamic and responsive user interface.</li>
      <li>Building the back-end with Node.js and PostgreSQL to handle eCommerce functionality, including inventory management, order tracking, and payments.</li>
      <li>Implementing affiliate marketing features and payment gateway integrations.</li>
    </ol>
    <p><strong>Tech Stack:</strong> React, Node.js, Express, PostgreSQL</p>
    <p>Gebeya is a powerful tool for eCommerce businesses looking to streamline their operations and expand their market reach.</p>
  </div>`,
    slug: "gebeya",
  },
  {
    title: "La Vie en Rose",
    src: "la.png",
    desc: "A beautifully designed restaurant website.",
    color: "#8cd965",
    tech: "WordPress",
    description: `<h3>La Vie en Rose</h3>
  <p><strong>Description:</strong> A beautifully designed restaurant website.</p>
  <p><strong>Technologies Used:</strong> WordPress</p>
  <p><strong>Details:</strong></p>
  <p>La Vie en Rose is a visually appealing restaurant website built on WordPress. The website focuses on providing a sophisticated online presence that reflects the brand’s identity, offering an engaging user experience. It includes essential features like an online menu, reservation system, and contact information, all designed with a clean, elegant aesthetic. Perfect for restaurants looking to establish an online presence that matches their physical ambiance, this site ensures customers can easily explore the menu, make reservations, and connect with the business.</p>
  <div>
    <h4>Problem Solver Focus</h4>
    <p>My goal was to help La Vie en Rose establish an online presence that mirrors their beautiful restaurant while providing customers with essential services like menu viewing and reservations.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Designing a website with an elegant aesthetic to match the restaurant’s physical ambiance.</li>
      <li>Implementing a user-friendly menu and reservation system for customers.</li>
      <li>Ensuring that the site was easy to navigate and manage through WordPress.</li>
    </ol>
    <p><strong>Impact of My Work:</strong> The website successfully helped the restaurant showcase its brand online and enabled customers to make reservations easily, improving customer engagement.</p>
  </div>

  <div>
    <h4>My Role</h4>
    <p>I led the design and development of the La Vie en Rose website, ensuring it was visually stunning while also being functional for restaurant customers.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Designing the website's UI with WordPress to ensure a smooth and pleasant user experience.</li>
      <li>Creating an online menu and reservation system that helped customers make bookings effortlessly.</li>
      <li>Implementing an easy-to-use WordPress dashboard for the restaurant to manage content.</li>
    </ol>
    <p><strong>Tech Stack:</strong> WordPress</p>
    <p>The website perfectly represents the restaurant’s identity, enabling customers to easily browse the menu and make reservations.</p>
  </div> `,
    slug: "la-vie-en-rose",
  },
  {
    title: "Yeshitila Investment Group",
    src: "yig.png",
    desc: "An elegant website for an investment group company.",
    color: "#8cd965",
    tech: "React, Node, Express, MongoDB",
    description: `
    <h3>Yeshitila Investment Group</h3>
  <p><strong>Description:</strong> An elegant website designed for an investment group company.</p>
  <p><strong>Technologies Used:</strong> React, Node.js, Express, MongoDB</p>
  <p><strong>Details:</strong></p>
  <p>The Yeshitila Investment Group website is crafted to represent the company’s professional identity and services. The website features a sleek, modern design and includes sections for company information, services, portfolio, and contact. Built with React for the front-end and Node.js/Express for the back-end, the website ensures smooth performance and a responsive layout to provide an excellent user experience on any device.</p>
  <div>
    <h4>Problem Solver Focus</h4>
    <p>My focus was to deliver a visually appealing and functional website that showcases the investment group’s brand and provides users with seamless access to information.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Designing a professional and elegant interface tailored to the company's industry.</li>
      <li>Creating a dynamic back-end to support contact forms and inquiries.</li>
      <li>Ensuring a fully responsive design for optimal performance on mobile and desktop.</li>
    </ol>
    <p><strong>Impact of My Work:</strong> The website effectively represents the company’s brand and helps potential clients learn about their services and connect with them.</p>
  </div>

  <div>
    <h4>My Role</h4>
    <p>I was responsible for the design and development of the Yeshitila Investment Group website, ensuring it met the client’s expectations for a professional and sleek online presence.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Developing a responsive and visually appealing front-end using React.</li>
      <li>Implementing a robust back-end with Node.js and MongoDB to handle content updates and contact inquiries.</li>
      <li>Integrating performance optimizations for smooth navigation and fast load times.</li>
    </ol>
    <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
    <p>The Yeshitila Investment Group website successfully presents the company’s offerings, ensuring it is both professional and user-friendly.</p>
  </div>
    `,
    slug: "yeshitila-investment-group",
  },
  {
    title: "Emma's Roastery",
    src: "emmas.png",
    desc: "A coffee shop website with eCommerce features for selling coffee beans and reservations.",
    color: "#8cd965",
    tech: "WordPress",
    description: `<div>
  <h3>Emma's Roastery</h3>
  <p><strong>Description:</strong> A coffee shop website with eCommerce functionality for selling coffee beans and a reservation system.</p>
  <p><strong>Technologies Used:</strong> WordPress</p>
  <p><strong>Details:</strong></p>
  <p>Emma's Roastery website is designed to serve both as a digital storefront and a reservations platform for the coffee shop. Customers can explore the online menu, reserve tables, and purchase premium coffee beans through a seamless eCommerce system. Built on WordPress, the platform allows for easy management of products and reservations, ensuring smooth functionality for both customers and shop owners.</p>
  <div>
    <h4>Problem Solver Focus</h4>
    <p>The goal was to create an intuitive platform that combines online sales and table reservations, making it easier for customers to engage with Emma's Roastery.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Developing an attractive and user-friendly design to highlight the brand's unique offerings.</li>
      <li>Integrating an eCommerce system for purchasing coffee beans online.</li>
      <li>Adding a reservation system for customers to book tables with ease.</li>
    </ol>
    <p><strong>Impact of My Work:</strong> The website boosted Emma's Roastery's online presence, enabling customers to conveniently shop for products and book reservations.</p>
  </div>

  <div>
    <h4>My Role</h4>
    <p>I was responsible for designing and implementing the Emma's Roastery website, ensuring it met the coffee shop's needs for an engaging online platform.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Designing a clean and professional WordPress website that captures the coffee shop’s brand essence.</li>
      <li>Setting up a robust eCommerce system for online product sales.</li>
      <li>Implementing a reservations feature to simplify the booking process for customers.</li>
    </ol>
    <p><strong>Tech Stack:</strong> WordPress</p>
    <p>The Emma's Roastery website successfully combines eCommerce and reservations, enhancing the overall customer experience.</p>
  </div>
</div>
 `,
    slug: "emmas-roastery",
  },
  {
    title: "Kandake Beauty",
    src: "kandake.png",
    desc: "An eCommerce website that sells cosmetics.",
    color: "#8cd965",
    tech: "WordPress",
    description: `
   <div>
  <h3>Kandake Beauty</h3>
  <p><strong>Description:</strong> An eCommerce website for selling cosmetics online.</p>
  <p><strong>Technologies Used:</strong> WordPress</p>
  <p><strong>Details:</strong></p>
  <p>Kandake Beauty's website is a fully functional eCommerce platform designed for selling cosmetics. The website offers a sleek and attractive layout to appeal to customers, showcasing products with detailed descriptions and images. It features a smooth shopping experience with secure payment integration, easy navigation, and quick loading times. Built with WordPress, the platform is easy to manage and scalable to accommodate new products and customers.</p>
  <div>
    <h4>Problem Solver Focus</h4>
    <p>The primary goal was to create an appealing and efficient platform for Kandake Beauty to expand their business and reach more customers online.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Designing a visually stunning and user-friendly eCommerce website.</li>
      <li>Integrating secure payment gateways for seamless transactions.</li>
      <li>Optimizing the platform for mobile and desktop devices to ensure broad accessibility.</li>
    </ol>
    <p><strong>Impact of My Work:</strong> The website empowered Kandake Beauty to reach a larger audience and streamline their sales process.</p>
  </div>

  <div>
    <h4>My Role</h4>
    <p>I designed and developed the Kandake Beauty eCommerce website, ensuring it aligned with the brand’s goals and provided a great shopping experience.</p>
    <p>My contributions included:</p>
    <ol>
      <li>Creating a visually appealing and responsive design using WordPress.</li>
      <li>Implementing product management tools and secure payment integrations.</li>
      <li>Optimizing the website for performance and scalability.</li>
    </ol>
    <p><strong>Tech Stack:</strong> WordPress</p>
    <p>The Kandake Beauty website successfully serves as an online storefront, helping the brand expand its reach and enhance customer engagement.</p>
  </div>
</div>
 `,
    slug: "kandake-beauty",
  },

  // Add other projects here
];

export default projects;
