import type { SceneGraph } from "./types.js";
import { GameDirector } from "./core/GameDirector.js";
import scenesRaw from "./data/scenes.json";

// Strip the _meta key which is not a scene node
const { _meta: _, ...graph } = scenesRaw as Record<string, unknown>;
const sceneGraph = graph as SceneGraph;

const canvas  = document.getElementById("scene") as HTMLCanvasElement;
const loading = document.getElementById("loading")!;

const director = new GameDirector(canvas, sceneGraph, {
  riceKept: 0,
  knowsSeongchil: 0,
  knowsJaebok: 0,
  valleyEyeContact: 0,
  bonggilDistance: 0,
  countsSmoke: 0,
  softenedBiscuit: 0,
  redidStrap: 0,
  breathRhythm: 0,
  rememberedSummitView: 0,
  talkedToStranger: 0,
  blisterPopped: 0,
  lickedBowl: 0,
  askedIfScared: 0,
  acceptedClothD19: 0,
  rememberedRhythm: 0,
  askedSeniorDays: 0,
  askedAboutSmoke: 0,
  wantedWater: 0,
  ateWithSeongchil: 0,
  approachedBonggilD19: 0,
  askedSeongchilFirst: 0,
  dunkedFace: 0,
  askedAboutGuns: 0,
  mentionedSimilarAge: 0,
  sawBonggilAvertVillage: 0,
  ateHalfMeal: 0,
  silentAtNight: 0,
  lookedAtRice: 0,
  readNameTag: 0,
  tiedCarefully: 0,
  matchedSoldierBreath: 0,
  askedIfOk: 0,
  lowered: 0,
  watchedSoldierCarried: 0,
  saidLoadDiffers: 0,
  toldSeongchilName: 0,
  silentAtNightD17: 0,
  askedBonggilAboutMissing: 0,
  askedSeongchilAboutMissing: 0,
  keptOwnRhythm: 0,
  saidDontKnowName: 0,
  askedHowMuchLonger: 0,
  sawSmokeGap: 0,
  slowedInRain: 0,
  noticedNoSmokeSmell: 0,
  closedEyesListening: 0,
  askedHomesick: 0,
  toldBonggilAboutBear: 0,
  followedBonggilD14: 0,
  watchedBonggilBack: 0,
  toldBonggilSmokeCount: 0,
  agreedBonggilQuiet: 0,
  feltSafeNarrow: 0,
  watchedBonggilWatchSoldier: 0,
  askedSeongchilFamily: 0,
  calledBonggilD14: 0,
  eyeContactUS: 0,
  smelledUSFood: 0,
  readBoxLetters: 0,
  askedBonggilOkD13: 0,
  watchedUSScope: 0,
  gotChocolate: 0,
  sharedChocolate: 0,
  hidChocolate: 0,
  leftChocolateBeside: 0,
  watchedBonggilDawn: 0,
  fellBehindSpeed: 0,
  foundBonggilBreathing: 0,
  saidScaredYes: 0,
  lookedAroundAfter: 0,
  saidNotSmoke: 0,
  fellWhileDescending: 0,
  askedWhoDied: 0,
  askedBonggilWhy: 0,
  disagreedBonggilNormal: 0,
  watchedBonggilEyesOpen: 0,
  satBesideBonggilD11: 0,
  saidTenDays: 0,
  saidAlGo: 0,
  respondedToWarnings: 0,
  heldOnSlip: 0,
  droppedJaebok: 0,
  metJaebokEyes: 0,
  toldSeongchilJaebokName: 0,
  toldBonggilAboutJaebok: 0,
  saidJaebokNameAtNight: 0,
  askedSeongchilBonggilD10: 0,
  askedSergeantD10: 0,
  saidSomethingHappenedD10: 0,
  helpedFallenPorter: 0,
  watchedBonggilTurnAway: 0,
  askedBonggilOkD10: 0,
  watchedSummitSilent: 0,
  saidD12AfterD10: 0,
  approachedBonggilD10: 0,
  calledBonggilD10: 0,
});

const firstNode = Object.keys(sceneGraph)[0];
director.enter(firstNode).then(() => {
  loading.style.display = "none";
});

let t0 = 0;
function loop(ts: number) {
  const t = (ts - t0) / 1000;
  director.update(t);
  requestAnimationFrame(loop);
}
requestAnimationFrame((ts) => { t0 = ts; loop(ts); });
