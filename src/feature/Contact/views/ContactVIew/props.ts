
export namespace ContactFormProps {
    export interface FormData {
        fName: string
        lName: string
        email: string
        interested: "A" | "B" | "C" | "D"
        msg: string
    }
    export interface ErrorProps {
        name?: string
        email?: string
        interested?: string
        msg?: string
    }
}