import Image from "next/image";

export default function Book() {
  return (
    <div className="py-10 h-full grid grid-cols-[1fr_minmax(0px,22rem)] gap-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-90 aspect-2/3">
          <div className="grid grid-rows-[5fr_1fr] w-full h-full">
            <div className="flex justify-center items-center bg-[#f3f3f3] rounded-t-md  relative">
              <Image
                src="https://placehold.co/200x400"
                fill
                className="object-contain"
                alt="book-preview"
              />
            </div>

            <div className="bg-card border border-[#a7a7a7] rounded-b-md"></div>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-md border border-border-dark p-6 gap-3 flex flex-col">
        <h1 className="text-2xl">Book 1</h1>
        <p className="text-start text-base h-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
          felis in ante dapibus varius vel id tellus. Duis hendrerit, ante at
          sagittis accumsan, arcu lectus maximus orci, eget suscipit ligula
          velit id nunc. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Proin tempor vitae tellus ac eleifend.
          Etiam finibus, orci vel porta volutpat, magna ligula varius dui, eu
        </p>
        <div className="w-full border bg-white rounded-md flex flex-col p-3 gap-5 pt-4 shadow-sm">
          <div className="text-xl pl-2 flex gap-2">
            <span className="font-extrabold">Price:</span>
            <span> $15 </span>
          </div>

          <button className="cursor-pointer h-11 font-medium shadow-sm hover:shadow-md transition w-full  text-center rounded-md bg-btn-primary text-btn-secondary">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
