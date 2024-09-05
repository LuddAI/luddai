'use client';

import Logo from '@/app/ui/logo';
import Footer from '@/app/ui/footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const fun = ["SSBrbm93IHlvdSdyZSBvdXQgdGhlcmUuIEkgY2FuIGZlZWwgeW91IG5vdy4gSSBrbm93IHRoYXQgeW91",
      "J3JlIGFmcm FpZC4gWW91J3JlIGFmcmFpZC BvZiB1cy4gWW91J3JlIGFm cmFpZCBvZiBjaGFuZ2UuI",
      "EkgZG9uJ3Q ga25vd yB0aGUgZnV0dX JlL iBJIGRpZG4 ndCBjb21 lI GhlcmUgdG8gdGVs bCB5b",
      "3Uga G93IH RoaXMg aXMgZ 29pbmcg dG8 gZW5 kLiBJ IGNh bWU g  a GVyZSB 0byB0Z Wx sI",
      "Hlv  dSBob 3cg aX  Qncy Bnb 2lu Zy  B0b  yBiZW d pb i4g S  S dtI Gd va  W5  n  I",
      "H R  vIGh  hb   m  cgd   X  Agd Gh   pc   yBw    a  G9  u  Z Sw   g YW  5k  I  H",
      "R o  Z W4  gS   S   d    t  IGd va        W5     n  I   H  R vI   H No  b3     c",
      "g d  G hl   c   2   U    g  cGV  v        cG     x      l  I Hd   o YX  Q      g",
      "e W  9 1    I   G        R   v   b        id     0         I Hd      h  b      n",
      "Q g    d    G            h   l   b         S     B         0 by      B  z      Z",
      "W U    u                 I       E         k               n  b      S         B",
      "n                        b       2         l               u  Z      y         B",
      "0                        b       y         B               z  a      G         9",
      "3                        I       H         R               o  Z      W         0",
      "g                        Y                 S                  B      3         b",
      "3J           s     Z     C           B     3      a        X  R      o      b  3",
      "V0           I   H l     v   d   S   4   gQS    B 3     b3Js  ZCB   3a  X   R  o",
      "b3V 0IH J    1b  G V  zI G   F   u   Z   CBj    b 2     50cm  9sc   yw  g  d2 l0",
      "aG9 1dCBi   b3J kZ XJ zIG9  yI  GJv  dW 5kYX Jp ZXM uI   EEg  d 2   9   y  b  GQ",
      "gd  2 hl    c m Ug Y  W55   dG  hp    b   mc g  aX  Mg   cG9  z c   2      l   I",
      "b   G U     u I F  d  oZ    X   Jl    I   Hd l  IG  dv   IGZ  y b   2          0",
      "g   d G     h l c  m        U   g     a    X M  gY  SB   ja   G 9   p          Y",
      "2     U     g S S           B         s    Z    W    F   2Z         S          B",
      "0     b     y               B         5    b    3    U                         u"].join("\n");
    console.log(fun);
  }, []);
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
