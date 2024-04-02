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
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.654625016264!2d3.465959910167765!3d6.438382893525969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51a2a3f49d7%3A0x9904ec4b27f70f2e!2sPocal%20Park%20Estate!5e0!3m2!1sen!2sng!4v1702028811032!5m2!1sen!2sng"
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
            <div className="flex mb-3 mt-3">
              <LocationMarkerIcon className="w-5 mr-3 " />
              <p className="w-full">
                FLAT 1, POCAL PARK ESTATE, PLOT 1A, DELE ADEDEJI STREET, LEKKI
                PHASE 1 LAGOS.
              </p>
            </div>
            <div className="flex mb-3 mt-3">
              <LocationMarkerIcon className="w-5 mr-3 " />
              <p className="w-full ">
                4205 Collegiate Way, Mount pleasant 48858 Michigan, USA
              </p>
            </div>
            <div className="flex mb-3">
              <PhoneIcon className="w-4 mr-3" />
              <p className="mr-[1rem]">+2348130968441</p>
              <p>+19894912840</p>
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
