import { useState } from "react";
import { Award, GraduationCap, MapPin, Play, Users } from "lucide-react";
import { IMAGES } from "../../data/site";
import { useCountUp } from "../../hooks/useCountUp";

// 👉 yaha 4 fixed stats hain - values/labels apne hisaab se change kar do
const STATS = [
  {
    key: "experience",
    value: "0",
    suffix: "+",
    label: "Years of Experience",
    icon: Award,
  },
  { key: "students", value: 0, suffix: "+", label: "Students", icon: Users },
  {
    key: "educators",
    value: "000",
    suffix: "+",
    label: "Educators",
    icon: GraduationCap,
  },
  { key: "branches", value: 0, suffix: "+", label: "Branches", icon: MapPin },
];

// 👉 apni real Facebook Reels ke links yaha daalo (share/permalink URL)
// thumbnail chaho toh apna custom image de do, warna generic placeholder dikhega
const REELS = [
  {
    url: "https://www.facebook.com/reel/1307944577898787",
    thumbnail: "",
    label: "Reel 1",
  },
  {
    url: "https://www.facebook.com/reel/2527661794365254",
    thumbnail: "",
    label: "Reel 2",
  },
];

function Stat({ stat }) {
  const [ref, value] = useCountUp(stat.value);
  const Icon = stat.icon;
  const img = IMAGES?.stats?.[stat.key];

  return (
    <div className="statCard" ref={ref}>
      {img ? (
        <img
          src={img}
          alt=""
          referrerPolicy="no-referrer"
          className="statImg"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling?.removeAttribute("hidden");
          }}
        />
      ) : null}
      <div className="statIcon" hidden={Boolean(img)}>
        <Icon size={30} strokeWidth={1.5} />
      </div>
      <strong className="statValue">
        {value.toLocaleString("en-IN")}
        {stat.suffix}
      </strong>
      <span className="statLabel">{stat.label}</span>
    </div>
  );
}

function ReelTile({ reel }) {
  const [playing, setPlaying] = useState(false);
  const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    reel.url,
  )}&show_text=false&autoplay=true`;

  return (
    <div className="reelTile">
      {playing ? (
        <iframe
          className="reelFrame"
          src={embedSrc}
          title={reel.label}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="reelThumbBtn"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${reel.label}`}
          style={
            reel.thumbnail
              ? { backgroundImage: `url(${reel.thumbnail})` }
              : undefined
          }
        >
          <span className="playBtn">
            <Play size={22} fill="#fff" color="#fff" />
          </span>
          <span className="fbBadge">facebook</span>
        </button>
      )}
    </div>
  );
}

function ReelsCard() {
  return (
    <div className="reelsRow">
      {REELS.map((reel, i) => (
        <ReelTile key={reel.url + i} reel={reel} />
      ))}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap statsSplit">
        <div className="statsGrid">
          {STATS.map((s) => (
            <Stat key={s.key} stat={s} />
          ))}
        </div>

        <ReelsCard />
      </div>

      <style>{`
        .stats {
          padding: 56px 0;
          background: #f4f2ee;
        }

        .statsSplit {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        /* ---- Stat cards ---- */
        .statsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .statCard {
          background: #fff;
          border: 1px solid #d9484f;
          border-radius: 10px;
          padding: 26px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }

        .statIcon,
        .statImg {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a1a1a;
        }
        .statImg { object-fit: contain; }

        .statValue {
          font-size: 34px;
          font-weight: 800;
          color: #c0272d;
          line-height: 1;
        }

        .statLabel {
          font-size: 15px;
          color: #1a1a1a;
        }

        /* ---- Facebook Reels ---- */
        .reelsRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          height: 100%;
        }

        .reelTile {
          position: relative;
          background: #000;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 9 / 16;
          width: 100%;
        }

        .reelThumbBtn {
          width: 100%;
          height: 100%;
          border: none;
          background-color: #1c1c1c;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0;
        }

        .playBtn {
          width: 54px;
          height: 54px;
          background: rgba(24, 119, 242, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fbBadge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          text-transform: capitalize;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .reelFrame {
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (max-width: 860px) {
          .statsSplit {
            grid-template-columns: 1fr;
          }
          .reelsRow {
            aspect-ratio: unset;
          }
        }

        @media (max-width: 480px) {
          .statsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
