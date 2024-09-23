import ContactComponent from "./ContactComponent"
export default function Contact(){
    return (
        <div className="min-h-screen w-screen flex flex-col justify-center items-center ">
            <div className="text-black px-10 mt-8" >
                <ContactComponent/>
            </div>
        </div>
    )
}