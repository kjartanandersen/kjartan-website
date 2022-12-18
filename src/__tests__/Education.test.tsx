import { cleanup } from "@testing-library/react";
import React from "react";
import { getAllEducation } from  '../helpers/cv-storage'

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../helpers/cv-storage')

jest.mocked(getAllEducation)

describe('<Education />', () => { 
    test('should first', () => { 

        expect(1).toEqual(1)

     })
 });

