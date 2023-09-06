import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto h-screen bg-gradient-to-r from-sky-700 to-indigo-700 blur-bg">
      <div className="container flex flex-col h-screen justify-between">
        <div className="header my-2 flex justify-between items-center">
          <div className="logo">
            <h2 className="text-3xl font-thin text-slate-100 backdrop-blur-sm bg-fuchsia-500/30 px-2">
              Bri . git
            </h2>
          </div>
          <div className="menu">
            <Button variant="link">
              <p className="text-xl font-extralight text-white hover:underline hover:decoration-wavy hover:decoration-emerald-400">
                Blog
              </p>
            </Button>
            <Button variant="link">
              <p className="text-xl font-extralight text-white hover:underline hover:decoration-wavy hover:decoration-emerald-400">
                algo
              </p>
            </Button>
            <Button variant="link">
              <p className="text-xl font-extralight text-white hover:underline hover:decoration-wavy hover:decoration-emerald-400">
                algo
              </p>
            </Button>
          </div>
        </div>
        <div className="body my-20 flex mx-auto justify-center ">
          <figure className="flex bg-slate-100 rounded-xl p-8 w-2/4 flex-col text-center space-y-4 items-center">
            <Avatar className="w-28 h-28 flex">
              <AvatarImage src="https://avatars.githubusercontent.com/u/28297385?v=4" />
            </Avatar>
            <blockquote>
              <p className="text-lg font-medium">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                dictum tortor ac tellus fermentum lacinia. In hac habitasse
                platea dictumst. Nam condimentum fermentum massa. Sed aliquam
                dui a tellus laoreet semper. Sed eu ante urna. Maecenas suscipit
                mi quis vestibulum iaculis. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nunc quis
                enim felis."
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="underline decoration-wavy decoration-fuchsia-900">
                Brigida Bernardes
              </div>
              <div className="text-slate-700">
                Frontend Developer, Netshow.me
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="footer m-2 flex content-end justify-between items-center">
          <div className="contact">
            <Button variant="link">
              <p className="text-xl font-extralight text-white hover:underline hover:decoration-wavy hover:decoration-emerald-400">
                brigida.bernardes@netshow.me
              </p>
            </Button>
          </div>
          <div className="madewith">
            <p className="text-sm font-extralight text-white hover:underline hover:decoration-wavy hover:decoration-emerald-400">
              made with 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
