// Challenge Part One & Two

// function MyContent() {
//   return (
//     <div>
//       <header>
//         <nav><i class="fa-brands fa-react"></i></nav>
//       </header>
//       <h1>Why am I learning React?</h1>
//       <ol>
//         <li>I want to be a competent deveoper.</li>
//         <li>Will improve my employability.</li>
//         <li>Will help to create web pages quicker.</li>
//       </ol>
//       <footer>© 20xx Chiloane development. All rights reserved.</footer>
//     </div>
//   )
// };

// ReactDOM.render(<MyContent />, document.querySelector('.root'));

// Mini-challenge

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  )
}

function Content() {
  <div>
    <h1>Why am I learning React?</h1>
    <ol>
      <li>I want to be a competent deveoper.</li>
      <li>Will improve my employability.</li>
      <li>Will help to create web pages quicker.</li>
    </ol>
  </div>
}

function Footer() {
  return (
    <footer>© 20xx Chiloane development. All rights reserved.</footer>
  )
}

function Page() {
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
}

ReactDOM.render(<Page />, document.querySelector('.root'));