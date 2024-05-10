<h1>Chat App Created using NEXT JS and Socket IO</h1>

<h2>Here is a demo:</h2>

https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/ecb71f5a-c03a-4341-93ea-c0a1f67a98b2

<h2>Technologies used</h2>
<ul>
<li>Next JS for the main application</li>
<li>Next Auth for authentication</li>
<li>Node js Server to separately host the socket.io server</li>
<li>MySQL for the database</li>
</ul>

<h3>Here how to launch the app</h3>
<p>There are two folders in this project: nextjs and socket-server</p>
<p>To get started with the next js sever:</p>
<ul>
  <li>cd into the next js folder</li>
  <li>Run the command: <code>npm i</code> to install the node modules folder</li>
  After this, you need to provide some keys of your own. I had saved mine to an env file, which makes them unaccessible in this project.
  
  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/d6e4a073-99f9-4c88-843b-ac9977a7d96b)

  <li>AUTH_SECRET is the next auth secret key. You can put any secret key here. I generated one using an online tool</li>
  <li>GITHUB_ID and GITHUB_SECRET keys are used for github authentication for next auth. To create one, login with your github account -> settings -> developer settings -> OAuth Apps -> New OAuth apps.</li>
  <li>HOST, PORT, USER, PASSWORD, and DATABASE are used to connected to the MySQL database on your local computer.</li>
  You will need to create your own MySQL database. Mine was called chatapp. The tables used are: message, user, and conversation. 
  <li>user table:</li>
  
  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/d7173276-ab45-4096-87c3-98906e077e79)

  <li>conversation table: </li>

  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/bbb7b363-c423-4b74-9c8d-43ddc6eaf5c5)

  <p>Where user1 and user2 and the foreign keys to the user table</p>
</ul>
