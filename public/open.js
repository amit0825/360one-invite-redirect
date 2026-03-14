const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.one360.wealth";

const APP_STORE =
  "https://apps.apple.com/in/app/360-one-wealth-the-reserve/id6751482235";

function getMobileOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) return "android";

  if (/iPad|iPhone|iPod/.test(userAgent)) return "ios";

  return "other";
}

function getDeepLink() {
  const path = window.location.pathname;
  const segments = path.split("/");

  let mobile = "";

  if (segments.length >= 3) {
    mobile = segments[2];
  }

  return `360-one-wealth-the-reserve://invite/${mobile}`;
}

function openApp() {
  const os = getMobileOS();

  if (os === "other") return;

  const deepLink = getDeepLink();

  const start = Date.now();

  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = deepLink;

  document.body.appendChild(iframe);

  setTimeout(function () {
    const end = Date.now();

    if (end - start < 3000) {
      if (os === "android") {
        window.location.href = PLAY_STORE;
      }

      if (os === "ios") {
        window.location.href = APP_STORE;
      }
    }
  }, 2200);
}

window.onload = () => {
  setTimeout(openApp, 600);
};
