import React from "react";
import { phone4, audiobookdevices } from "../../../assets";

const Title = () => {
  return (
    <div className="w-full">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1480px] m-auto"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-6rem)] container-fluid pt-5 md:pt-0">
        <div className="flex flex-col justify-center md:p-20">
          <img src={phone4} alt="image1 " />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1> What is My Library ? </h1>
          <p>
            My Library is a digital library, with large number of sinhala and
            english e books , audio books , e newspaper and e magazines. you can
            read , listen all those digital materials with your mobile phone or
            tablets. 'My Library' Digital Library provides free and paid
            high-quality digital materials such as e books, audio books for
            anyone, anywhere. <br /> <br />
            Digital library is a blessing to students, schools, universities,
            and everyone who loves reading and learning. They are proving
            helpful, especially today, the pring cost goes up. With all physical
            sources of knowledge shut down, there is one thing that has not
            impeded expertise, and that’s Digital Libraries. If you are
            interested in seeking knowledge, you should not restrict yourself to
            physical books or resources.
          </p>
        </div>
      </div>
      <div className="gradient" />
      {/* <div className="max-w-[1480px] m-auto grid grid-cols-2"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-6rem)] container-fluid md:pt-0">
        <div className="flex flex-col justify-center gap-4 mt-10">
          <div>
            <h1> Enjoy everywhere you go </h1>
            <h2> with Audio Books </h2>
          </div>
          <p>
            Audiobooks allow you to listen anytime, anywhere. 'MyLibrary' is{" "}
            the perfect antidote for life’s duller moments — like doing the
            dishes, your daily traveling, or waiting at the doctor’s office — and gives
            you immediate access to inspiration, entertainment, and more.{" "}with your mobile phone or tablets.

          </p>
        </div>
        <div className="transition ease-in-out delay-200 hover:rounded-lg hover:-translate-y-1 hover:scale-105  duration-300  flex flex-col justify-center md:p-20 ">
          <img src={audiobookdevices} alt="image2" />
        </div>
      </div>
      <div className="gradient" />
    </div>
  );
};

export default Title;
