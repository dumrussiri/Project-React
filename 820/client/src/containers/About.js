import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About =() => {
    return (
        <div>
            <Header/>
                <div className="container col-md-5">
                    <h2>Hello!!</h2>
                    <p className="title text-just mt-4 mb-4">
                    <h6>มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน</h6>
                    <h6>เลขที่ 1 หมู่ 6 ต.กำแพงแสน อ.กำแพงแสน จ.นครปฐม 73140 </h6>
                    <h6>โทรศัพท์ : 0 3434 1550-3 หรือ 0 2942 8003-19 </h6>
                    <h6>กองบริหารการศึกษา 0 3434 1545-7 Fax 0 3435 1395</h6>
                    </p>
                    <h4 className="text-secondary text-center">BY Damrus CAFE</h4>
                </div>

            <Footer company ="KU" email = ""/>
        </div>
    )
}
export default About;