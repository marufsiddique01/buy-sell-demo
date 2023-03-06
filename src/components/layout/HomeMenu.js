import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function Homemenu() {
    return (
        <section>
            <div className='absolute left-0 right-0 w-full justify-start'>
                <div className='absolute left-0 -top-[70px] text-left -z-10'>
                    <Image src={"/sallad1.png"} alt='sallad' width={109} height={189} />
                </div>
                <div className='absolute right-0 -top-[100px] text-left -z-10'>
                    <Image src={"/sallad2.png"} alt='sallad' width={109} height={195} />
                </div>
            </div>
            <div className='text-center pb-7'>
                <SectionHeaders subHeader={"check out"} mainHeader={"Menu"} />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <MenuItem />
            </div>
        </section>
    );
}
