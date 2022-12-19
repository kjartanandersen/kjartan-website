import React, { useEffect, useState } from "react";

import { IProps, IState, EducationProp } from "../../_types/EducationTypes.d";
import { getAllEducation } from "../../helpers/cv-storage";

import './EducationStyles.css'

const Education: React.FC<IProps> = () => {
    const [educationList, setEducationList] = useState<EducationProp[]>([]);

    const getData = () => {
        getAllEducation().then((resp) => {
            setEducationList(resp);
        })
    }

    useEffect(() => {
        getData()
    });


    return (
        <div>
            <div className='cv-right-side-card'>
                    <h2><b>Education</b></h2>
                    <hr className='cv-line-border-right'></hr>
            {
                educationList.map((data, index) => {
                    return (
                    <div key={index}>
      
                    <p><b>{data.name}</b> <br />
                        {data.date_from} - {data.date_to}<br />
                        {data.subject}<br />
                        {data.description}

                    </p>
                    </div>
                    )
                  
                })
            }
            </div>
        </div>
    );
};

export default Education;
