import { Button } from "@/components/ui/button";

const SignInPage = () => {
    return ( 
        <div>
            This is an unprotected page
            <div>
                <Button className="text-red-500 bg-blue-100 hover:bg-green-600 ">
                    Button
                </Button>
            </div>
        </div>

     );
}
 
export default SignInPage;