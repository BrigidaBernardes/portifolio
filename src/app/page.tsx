import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto bg-gradient-to-r from-violet-900 to-indigo-700 blur-bg">
      <div className="container flex flex-col justify-between">
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
              <p className="text-xl font-extralight text-white  hover:underline hover:decoration-wavy hover:decoration-emerald-400">
                algo
              </p>
            </Button>
          </div>
        </div>
        <div className="body my-20 mx-auto items-center flex flex-col ">
          <Card className="flex bg-slate-100 rounded-xl p-4 w-2/4 flex-col text-center space-y-4 items-center mb-10">
            <Avatar className="w-28 h-28 flex">
              <AvatarImage src="https://avatars.githubusercontent.com/u/28297385?v=4" />
            </Avatar>
            <CardTitle>About me</CardTitle>
            <CardContent>
              <p className="text-lg font-medium">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                dictum tortor ac tellus fermentum lacinia. In hac habitasse
                platea dictumst. Nam condimentum fermentum massa. Sed aliquam
                dui a tellus laoreet semper. Sed eu ante urna. Maecenas suscipit
                mi quis vestibulum iaculis. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nunc quis
                enim felis."
              </p>
            </CardContent>
            <CardFooter className="font-medium flex flex-col">
              <p className="underline decoration-wavy decoration-fuchsia-900">
                Brigida Bernardes
              </p>
              <p className="text-slate-700">Frontend Developer, Netshow.me</p>
            </CardFooter>
          </Card>
          <div>
            <h1 className="text-white text-left ml-2 text-2xl py-2 font-bold">📰 Articles</h1>
            <div className="articles flex flex-wrap">
              <Card className="article p-3 w-96 m-2">
                <CardTitle>Learn React ✨</CardTitle>
                <CardDescription>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </CardDescription>
                <div>
                  <Button variant="link" className="p-0 decoration-wavy">
                    See more
                  </Button>
                </div>
              </Card>
              <Card className="article p-3 w-96 m-2">
                <CardTitle>Learn Shadcn/ui ✨</CardTitle>
                <CardDescription>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </CardDescription>
                <div>
                  <Button variant="link" className="p-0 decoration-wavy">
                    See more
                  </Button>
                </div>
              </Card>
              <Card className="article p-3 w-96 m-2">
                <CardTitle>Learn Tailwind ✨</CardTitle>
                <CardDescription>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </CardDescription>
                <div>
                  <Button variant="link" className="p-0 decoration-wavy">
                    See more
                  </Button>
                </div>
              </Card>
              <Card className="article p-3 w-96 m-2">
                <CardTitle>Learn Next.js ✨</CardTitle>
                <CardDescription>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </CardDescription>
                <div>
                  <Button variant="link" className="p-0 decoration-wavy">
                    See more
                  </Button>
                </div>
              </Card>
              <Card className="article p-3 w-96 m-2">
                <CardTitle>Learn Typescript ✨</CardTitle>
                <CardDescription>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </CardDescription>
                <div>
                  <Button variant="link" className="p-0 decoration-wavy">
                    See more
                  </Button>
                </div>
              </Card>
            </div>
          </div>
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
