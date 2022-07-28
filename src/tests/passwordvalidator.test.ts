import {isStrongPassword} from "../passwordvalidator";
describe("Password",()=>{
    it("is strong when it meets all the conditions",()=>{
        expect(isStrongPassword("aBc_123")).toBe(true);
    });
    it("is not strong when it is not long enough",()=>{
        expect(isStrongPassword("aB_1")).toBe(false);
    });
    it("is not strong without at least one number",()=>{
        expect(isStrongPassword("aBcdeF_")).toBe(false);
    });
    it("is not strong without at least one uppercase letter",()=>{
        expect(isStrongPassword("abc_123")).toBe(false);
    });
    it("is not strong without at least one lowercase letter",()=>{
        expect(isStrongPassword("ABC_123")).toBe(false);
    });
    it("is not strong without at least one underscore",()=>{
        expect(isStrongPassword("AbC123")).toBe(false);
    });
});