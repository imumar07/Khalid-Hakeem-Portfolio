// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import "./App.css"
// import NavbarComp from './components/Navbar/NavbarComp';

function handleClick() {
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    //add class=dark in html element
    document.documentElement.classList.add("dark");
  } else {
    //remove class=dark in html element
    document.documentElement.classList.remove("dark");
  }

  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
}
function App() {

  return (
    <>
    <Button variant="primary">Primary</Button>{' '}
    <div className="flex" onClick={handleClick}>
        <div className="flex-initial w-64 font-bold underline decoration-sky-500 text-red-800">
          Change Mode (Dark/Light)
        </div>
      </div>
    <AlertDialog >
  <AlertDialogTrigger className="text-">Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      {/* <NavbarComp/> */}
    </>
  )
}

export default App
