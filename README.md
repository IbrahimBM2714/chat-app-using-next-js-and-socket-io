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
<h3>To get started with the next js server:</h3>
<ul>
  <li>cd into the next js folder</li>
  <li>Run the command: <code>npm i</code> to install the node modules folder</li>
  After this, you need to provide some keys of your own. I had saved mine to an env file, which makes them inaccessible in this project.
  <p>This is the .env file</p>
  
  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/236b69ef-086a-4917-834f-5bfea6fd140f)

  <li>AUTH_SECRET is the next auth secret key. You can put any secret key here. I generated one using an online tool</li>
  <li>GITHUB_ID and GITHUB_SECRET keys are used for github authentication for next auth. To create one, login with your github account -> settings -> developer settings -> OAuth Apps -> New OAuth apps.</li>

  <p>This is the .env.local file. Next JS works with the .env.local file</p>

  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/7c4894a4-843c-4cbf-8040-d6101d1da4f8)

  
  <li>NEXT_PUBLIC_SOCKET_SERVER is the endpoint where the socket io server is hosted, in my case I had hosted it on localhost using the IP address of my home
  <li>NEXT_PUBLIC_HOST, NEXT_PUBLIC_PORT, NEXT_PUBLIC_USER, NEXT_PUBLIC_PASSWORD, and NEXT_PUBLIC_DATABASE are used to connected to the MySQL database on your local computer.</li>
  You will need to create your own MySQL database. Mine was called chatapp. The tables used are message, user, and conversation. 
  <li>user table stores the user information</li>
  
  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/d7173276-ab45-4096-87c3-98906e077e79)

  <li>conversation table stores two users who participate in a conversation </li>

  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/bbb7b363-c423-4b74-9c8d-43ddc6eaf5c5)

  <p>Where user1 and user2 and the foreign keys to the user table</p>

  <li>message table stores the individual message sent by a user from a conversation. </li>
  
  ![image](https://github.com/IbrahimBM2714/chat-app-using-next-js-and-socket-io/assets/115867055/9ae5aa86-9524-4b2d-b87c-24a7d8e7dd35)

  <p>where userId is the foreign key to the user table and conversationId is the foreign key to the conversation table.</p>
</ul>

<h3>To get started with the node js server:</h3>
<ul>
  <li>Run the command <code>npm i</code> to install the node modules folder</li>
  <li>There is also an env variable called FRONTEND that has the IP address of your current network. You can use localhost here too. However, with localhost, you don't be able to use this website in any other device in your network</li>
</ul>
