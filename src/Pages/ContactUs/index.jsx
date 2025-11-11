import { Layout } from "../../Components";
import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

function Contact() {
  return (
    <Layout>
      <div className="flex max-w-[90%] flex-wrap my-[5rem] lg:max-w-[85%] mx-auto ">
        <div className=" w-[100%] md:w-[50%] mb-[2rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Contact Us.
          </h2>
          <p className="md:w-[80%] mb-[1rem]">
            {" "}
            For enquiries, sponsorship, feedback, kindly reach out to us. A team
            member will respond swiftly.
          </p>
          <div className="w-full md:w-[90%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2959.048476109902!2d-83.60278062539024!3d42.12784544974294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1762848647643!5m2!1sen!2sng"
              width={"100%"}
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex items-center">
          <div>
            <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
              Get in touch with us
            </h2>
            <p>Fill the form below or visit us at our contact address</p>
            <h4 className="mb-1 mt-2 font-semibold">Head Office Nigeria</h4>
            <div className="flex mb-3 mt-1 ">
              <LocationMarkerIcon className="w-5 mr-3 " />
              <p className="w-full">
                Dele Adedeji Street, Lekki Phase 1 Lagos, Nigeria.
              </p>
            </div>
            <h4 className="mb-1 mt-3 font-semibold">Head Office USA</h4>

            <div className="flex mb-3  mt-1 ">
              <LocationMarkerIcon className="w-5 mr-3 " />
              <p className="w-full ">PO Box 6 Whittaker, MI, USA, 48190.</p>
            </div>
            <div className="flex mb-3">
              <PhoneIcon className="w-4 mr-3" />
              <p className="mr-[1rem]">+17342731638</p>
              <p>+2348130328342</p>
            </div>
            <div className="flex mb-3">
              <MailIcon className="w-4 mr-3" />
              <a href="mailto:contact@attinaomi.org" className="text-[#0059ff]">
                contact@attinaomi.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
