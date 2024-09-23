import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import chat from "../../assets/messages-square.svg";
import counselling from "../../assets/counselling.svg";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { Button } from "@nextui-org/button";

export default function ContactComponent() {
return (
    <div className="gap-10 grid sm:grid-cols h-full w-[70vw] md:m-10">
        <Card className="md:py-20 md:p-5">
            <CardBody className="overflow-visible p-0 flex flex-row justify-center ">
                <Image
                    width="fit-content"
                    alt="chat"
                    className="w-full object-cover h-[150px] md:h-[300px]"
                    src={counselling}
                />
            </CardBody>
            <CardFooter className="text-small flex-col gap-10 justify-center ">
                <p className="text-sm text-center">
                    Schedule a session with Dr. Khalid Hakeem to discuss your concerns, plans, or any
                    queries you may have. He is here to assist you in any way he can.
                </p>
                <Button variant="default" className="bg-black text-white">
                    Book Appointment
                </Button>
            </CardFooter>
        </Card>
        <Card className="md:py-20 md:p-10 sm:py-5 ">
            <CardBody className="overflow-visible p-0 flex flex-column justify-center ">
                <div className="text-center mb-4 sm:text-lg lg:text-xl">
                    <h1 className="font-extrabold">Follow Dr. Khalid Hakeem</h1>
                </div>
                <div className="flex flex-row ">
                    <FaYoutube className="w-full object-cover sm:h-9 md:h-10" />
                    <FaFacebook className="w-full object-cover sm:h-9 md:h-10" />
                    <FaInstagram className="w-full object-cover sm:h-9 md:h-10" />
                    <BsTwitterX className="w-full object-cover sm:h-9 md:h-10" />
                    <MdOutlineMail className="w-full object-cover sm:h-9 md:h-10" />
                </div>
            </CardBody>
            <CardFooter className="text-small flex-col gap-10 justify-center "></CardFooter>
        </Card>
    </div>
);
}
