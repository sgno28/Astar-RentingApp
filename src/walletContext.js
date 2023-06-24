import React, { createContext, useContext } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
const ethers = require("ethers");

// Look at Web3-Onboard documentation here: https://onboard.blocknative.com/docs/overview/introduction
export const wallets = [injectedModule()];

const chains = [
  {
    id: "0x150",
    token: "SDN",
    label: "Shiden",
    icon: '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.578125 0.0546875 C 10.652344 0.960938 8.101562 2.152344 6.308594 3.921875 C 5.855469 4.371094 5.382812 4.953125 5.382812 5.070312 C 5.382812 5.117188 5.363281 5.152344 5.332031 5.152344 C 5.230469 5.152344 4.777344 6.167969 4.644531 6.683594 C 4.199219 8.46875 4.96875 10.117188 7.054688 11.839844 C 7.277344 12.015625 7.460938 12.144531 7.460938 12.117188 C 7.460938 12.09375 7.277344 11.882812 7.0625 11.660156 C 5.355469 9.953125 4.863281 8.039062 5.667969 6.316406 C 5.785156 6.078125 5.898438 5.855469 5.9375 5.808594 C 6.9375 4.523438 7.53125 4.015625 9.144531 3.046875 C 10.578125 2.183594 11.847656 1.625 13.292969 1.199219 C 14.09375 0.960938 15.339844 0.691406 15.636719 0.691406 C 15.753906 0.691406 15.847656 0.667969 15.847656 0.628906 C 15.847656 0.546875 14.960938 0 14.839844 0.0078125 C 14.777344 0.015625 14.660156 0.03125 14.578125 0.0546875 Z M 14.578125 0.0546875 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.136719 1.046875 C 16.125 1.054688 15.992188 1.085938 15.847656 1.109375 C 15.269531 1.199219 15.085938 1.246094 14.253906 1.460938 C 12.371094 1.960938 10.625 2.707031 9.285156 3.585938 C 8.855469 3.863281 8.484375 4.125 8.460938 4.144531 C 8.4375 4.175781 8.339844 4.261719 8.230469 4.332031 C 7.628906 4.738281 6.484375 6.03125 6.046875 6.785156 C 5.652344 7.46875 5.539062 8.398438 5.761719 9.207031 C 5.863281 9.578125 5.945312 9.644531 5.898438 9.324219 C 5.855469 9.007812 6.046875 8.292969 6.316406 7.746094 C 7.53125 5.324219 10.617188 3.421875 15.382812 2.160156 C 16.230469 1.9375 16.445312 1.890625 16.960938 1.800781 C 17.09375 1.777344 17.207031 1.746094 17.214844 1.730469 C 17.269531 1.683594 16.375 1.023438 16.269531 1.023438 C 16.207031 1.023438 16.144531 1.03125 16.136719 1.046875 Z M 16.136719 1.046875 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.863281 2.316406 C 12.125 3.125 7.214844 6.0625 6.4375 8.578125 C 6.207031 9.324219 6.222656 9.53125 6.523438 10.238281 L 6.675781 10.578125 L 6.667969 10.109375 C 6.667969 8.738281 7.644531 7.414062 9.652344 6.0625 C 11.371094 4.90625 13.738281 3.9375 15.730469 3.585938 C 15.863281 3.5625 16.253906 3.476562 16.617188 3.398438 L 17.269531 3.261719 L 17.546875 2.722656 C 17.699219 2.421875 17.785156 2.175781 17.738281 2.183594 C 17.691406 2.183594 17.300781 2.246094 16.863281 2.316406 Z M 16.863281 2.316406 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.308594 3.9375 C 13.554688 4.4375 11.023438 5.570312 8.96875 7.214844 C 8.09375 7.914062 7.644531 8.414062 7.332031 9.054688 C 6.929688 9.871094 6.921875 10.730469 7.324219 11.492188 C 7.414062 11.667969 7.421875 11.636719 7.40625 11.109375 C 7.371094 9.660156 8.285156 8.523438 10.652344 7.101562 C 12.363281 6.070312 13.59375 5.554688 15.523438 5.046875 L 16.460938 4.800781 L 16.730469 4.375 C 16.875 4.152344 17 3.945312 17 3.914062 C 17 3.863281 16.707031 3.871094 16.308594 3.9375 Z M 16.308594 3.9375 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.617188 7.96875 C 12.617188 8.015625 12.691406 8.117188 12.792969 8.207031 C 14.175781 9.445312 14.921875 11.316406 14.609375 12.785156 C 14.421875 13.652344 13.746094 14.746094 12.976562 15.429688 C 11.570312 16.675781 9.332031 17.914062 7.230469 18.625 C 6.339844 18.914062 4.707031 19.308594 4.347656 19.308594 C 4.070312 19.308594 4.109375 19.382812 4.5625 19.714844 C 4.914062 19.976562 4.992188 20 5.269531 19.953125 C 8.261719 19.460938 11.832031 17.847656 13.53125 16.207031 C 14.992188 14.808594 15.714844 13.023438 15.382812 11.609375 C 15.125 10.476562 14.144531 9.09375 13.015625 8.253906 C 12.863281 8.136719 12.707031 8.007812 12.675781 7.960938 C 12.636719 7.90625 12.617188 7.914062 12.617188 7.96875 Z M 12.617188 7.96875 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.539062 8.5 C 12.738281 9.398438 12.339844 10.429688 11.429688 11.347656 C 9.953125 12.832031 6.515625 14.554688 3.976562 15.078125 C 3.5625 15.160156 3.523438 15.183594 3.269531 15.585938 C 2.875 16.199219 2.871094 16.191406 3.769531 16.03125 C 3.875 16.015625 4.070312 15.976562 4.191406 15.953125 C 6.253906 15.59375 8.832031 14.429688 10.691406 13.03125 C 12.707031 11.507812 13.300781 10.300781 12.777344 8.808594 C 12.585938 8.269531 12.445312 8.085938 12.539062 8.5 Z M 12.539062 8.5 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.285156 9.738281 C 13.398438 11.015625 12.484375 12.40625 10.707031 13.675781 C 8.847656 15.007812 6.992188 15.800781 4.421875 16.375 C 3.871094 16.5 3.261719 16.625 3.070312 16.652344 C 2.699219 16.707031 2.722656 16.683594 2.316406 17.515625 L 2.152344 17.839844 L 2.332031 17.808594 C 2.421875 17.792969 2.636719 17.761719 2.808594 17.738281 C 5.308594 17.371094 8.230469 16.253906 10.332031 14.871094 C 12.128906 13.683594 13.101562 12.636719 13.523438 11.429688 C 13.746094 10.785156 13.730469 10.398438 13.4375 9.730469 L 13.246094 9.269531 Z M 13.285156 9.738281 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.078125 10.730469 C 14.0625 11.984375 13.023438 13.609375 11.484375 14.792969 C 10.144531 15.816406 8.160156 16.769531 5.929688 17.453125 C 4.984375 17.746094 3.691406 18.078125 3.0625 18.191406 C 2.898438 18.222656 2.769531 18.261719 2.769531 18.285156 C 2.769531 18.332031 3.199219 18.691406 3.445312 18.863281 C 3.625 18.976562 3.785156 18.984375 4.230469 18.875 C 4.339844 18.855469 4.53125 18.816406 4.652344 18.792969 C 5.429688 18.667969 7.523438 18.023438 8.363281 17.644531 C 9.375 17.183594 9.683594 17.03125 10.269531 16.683594 C 12.136719 15.585938 13.90625 13.722656 14.230469 12.53125 C 14.375 11.992188 14.332031 10.847656 14.144531 10.539062 C 14.101562 10.453125 14.078125 10.515625 14.078125 10.730469 Z M 14.078125 10.730469 "/></g></svg>',
    color: "#a67cff",
    rpcUrl: "https://evm.shiden.astar.network",
    publicRpcUrl: "https://evm.shiden.astar.network",
    blockExplorerUrl: "https://shiden.subscan.io",
  },
  {
    id: "0x250",
    token: "ASTR",
    label: "Astar",
    icon: '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">  <g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 19.976562 9.320312 C 19.601562 3.8125 14.832031 -0.351562 9.320312 0.0234375 C 6.578125 0.210938 4.167969 1.488281 2.484375 3.40625 L 2.480469 3.402344 C 2.46875 3.417969 2.457031 3.433594 2.445312 3.449219 C 0.777344 5.375 -0.164062 7.933594 0.0234375 10.679688 C 0.0429688 10.941406 0.0703125 11.199219 0.109375 11.453125 C 0.109375 11.464844 0.113281 11.476562 0.113281 11.488281 C 0.140625 11.65625 0.167969 11.824219 0.203125 11.988281 C 0.203125 11.992188 0.203125 11.992188 0.203125 11.996094 C 0.234375 12.148438 0.269531 12.292969 0.304688 12.441406 C 1.460938 17.046875 5.773438 20.308594 10.679688 19.976562 C 16.1875 19.601562 20.351562 14.832031 19.976562 9.320312 Z M 17.800781 9.46875 C 17.847656 10.148438 17.804688 10.8125 17.683594 11.449219 C 17.679688 11.449219 17.679688 11.445312 17.679688 11.441406 C 16.953125 9.667969 15.519531 8.386719 14.257812 7.683594 C 14.511719 4.679688 13.496094 3.414062 12.34375 3.207031 C 12.308594 3.203125 12.277344 3.195312 12.246094 3.191406 C 11.332031 3.074219 10.496094 3.722656 10.378906 4.636719 C 10.261719 5.550781 10.90625 6.390625 11.824219 6.507812 C 11.902344 6.515625 11.980469 6.519531 12.058594 6.519531 C 12.0625 6.621094 12.066406 6.726562 12.070312 6.839844 C 11.003906 6.574219 10.007812 6.523438 9.097656 6.605469 C 8.757812 6.628906 8.417969 6.671875 8.078125 6.734375 C 8.191406 5.71875 8.574219 4.582031 9.3125 3.75 C 10.023438 2.945312 11.085938 2.480469 12.242188 2.601562 C 12.460938 2.625 12.695312 2.675781 12.90625 2.746094 C 12.917969 2.75 12.925781 2.753906 12.9375 2.757812 C 15.617188 3.847656 17.589844 6.390625 17.800781 9.46875 Z M 10.828125 10.996094 C 10.828125 10.996094 10.828125 11 10.828125 11 C 10.589844 11.34375 10.304688 11.683594 9.972656 12.011719 C 9.472656 11.480469 9.070312 10.910156 8.765625 10.316406 C 8.75 10.285156 8.734375 10.253906 8.71875 10.222656 C 8.71875 10.222656 8.71875 10.21875 8.71875 10.21875 C 8.539062 9.839844 8.386719 9.425781 8.269531 8.972656 C 8.980469 8.804688 9.675781 8.742188 10.34375 8.773438 C 10.378906 8.777344 10.414062 8.777344 10.449219 8.78125 C 10.449219 8.78125 10.449219 8.78125 10.453125 8.78125 C 10.867188 8.816406 11.304688 8.890625 11.753906 9.015625 C 11.542969 9.714844 11.25 10.347656 10.886719 10.910156 C 10.867188 10.9375 10.851562 10.96875 10.828125 10.996094 Z M 7.414062 2.625 C 7.410156 2.625 7.410156 2.628906 7.40625 2.632812 C 6.234375 4.144531 5.84375 6.023438 5.863281 7.46875 C 3.132812 8.75 2.546875 10.265625 2.945312 11.367188 C 2.957031 11.394531 2.96875 11.425781 2.980469 11.457031 C 3.335938 12.308594 4.316406 12.707031 5.167969 12.351562 C 6.015625 11.996094 6.417969 11.019531 6.0625 10.167969 C 6.03125 10.09375 5.996094 10.023438 5.953125 9.957031 C 6.039062 9.898438 6.132812 9.84375 6.230469 9.785156 C 6.535156 10.839844 6.984375 11.734375 7.511719 12.480469 C 7.699219 12.761719 7.90625 13.035156 8.128906 13.296875 C 7.195312 13.703125 6.019531 13.945312 4.929688 13.722656 C 3.875 13.503906 2.945312 12.816406 2.46875 11.757812 C 2.378906 11.554688 2.308594 11.324219 2.261719 11.109375 C 2.234375 10.917969 2.214844 10.726562 2.199219 10.53125 C 1.957031 6.949219 4.179688 3.757812 7.414062 2.625 Z M 10.53125 17.800781 C 8.402344 17.945312 6.414062 17.21875 4.914062 15.929688 C 6.808594 16.1875 8.632812 15.585938 9.875 14.847656 C 12.347656 16.570312 13.953125 16.320312 14.710938 15.425781 C 14.730469 15.402344 14.75 15.378906 14.769531 15.351562 C 15.328125 14.617188 15.1875 13.570312 14.453125 13.011719 C 13.71875 12.453125 12.671875 12.59375 12.113281 13.328125 C 12.0625 13.390625 12.023438 13.457031 11.984375 13.527344 C 11.894531 13.480469 11.796875 13.429688 11.699219 13.371094 C 12.460938 12.582031 13.003906 11.742188 13.390625 10.914062 C 13.539062 10.609375 13.671875 10.292969 13.785156 9.96875 C 14.609375 10.574219 15.40625 11.472656 15.757812 12.53125 C 16.097656 13.550781 15.96875 14.699219 15.285156 15.644531 C 15.15625 15.820312 14.992188 15.996094 14.828125 16.144531 C 14.824219 16.148438 14.824219 16.148438 14.820312 16.152344 C 13.628906 17.089844 12.152344 17.691406 10.53125 17.800781 Z M 10.53125 17.800781 "/></g></svg>',
    color: "#0085ff",
    rpcUrl: "https://evm.astar.network",
    publicRpcUrl: "https://evm.astar.network",
    blockExplorerUrl: "https://astar.subscan.io",
  },
  {
    id: "0x51",
    token: "SBY",
    label: "Shibuya",
    icon: '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.578125 0.0546875 C 10.652344 0.960938 8.101562 2.152344 6.308594 3.921875 C 5.855469 4.371094 5.382812 4.953125 5.382812 5.070312 C 5.382812 5.117188 5.363281 5.152344 5.332031 5.152344 C 5.230469 5.152344 4.777344 6.167969 4.644531 6.683594 C 4.199219 8.46875 4.96875 10.117188 7.054688 11.839844 C 7.277344 12.015625 7.460938 12.144531 7.460938 12.117188 C 7.460938 12.09375 7.277344 11.882812 7.0625 11.660156 C 5.355469 9.953125 4.863281 8.039062 5.667969 6.316406 C 5.785156 6.078125 5.898438 5.855469 5.9375 5.808594 C 6.9375 4.523438 7.53125 4.015625 9.144531 3.046875 C 10.578125 2.183594 11.847656 1.625 13.292969 1.199219 C 14.09375 0.960938 15.339844 0.691406 15.636719 0.691406 C 15.753906 0.691406 15.847656 0.667969 15.847656 0.628906 C 15.847656 0.546875 14.960938 0 14.839844 0.0078125 C 14.777344 0.015625 14.660156 0.03125 14.578125 0.0546875 Z M 14.578125 0.0546875 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.136719 1.046875 C 16.125 1.054688 15.992188 1.085938 15.847656 1.109375 C 15.269531 1.199219 15.085938 1.246094 14.253906 1.460938 C 12.371094 1.960938 10.625 2.707031 9.285156 3.585938 C 8.855469 3.863281 8.484375 4.125 8.460938 4.144531 C 8.4375 4.175781 8.339844 4.261719 8.230469 4.332031 C 7.628906 4.738281 6.484375 6.03125 6.046875 6.785156 C 5.652344 7.46875 5.539062 8.398438 5.761719 9.207031 C 5.863281 9.578125 5.945312 9.644531 5.898438 9.324219 C 5.855469 9.007812 6.046875 8.292969 6.316406 7.746094 C 7.53125 5.324219 10.617188 3.421875 15.382812 2.160156 C 16.230469 1.9375 16.445312 1.890625 16.960938 1.800781 C 17.09375 1.777344 17.207031 1.746094 17.214844 1.730469 C 17.269531 1.683594 16.375 1.023438 16.269531 1.023438 C 16.207031 1.023438 16.144531 1.03125 16.136719 1.046875 Z M 16.136719 1.046875 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.863281 2.316406 C 12.125 3.125 7.214844 6.0625 6.4375 8.578125 C 6.207031 9.324219 6.222656 9.53125 6.523438 10.238281 L 6.675781 10.578125 L 6.667969 10.109375 C 6.667969 8.738281 7.644531 7.414062 9.652344 6.0625 C 11.371094 4.90625 13.738281 3.9375 15.730469 3.585938 C 15.863281 3.5625 16.253906 3.476562 16.617188 3.398438 L 17.269531 3.261719 L 17.546875 2.722656 C 17.699219 2.421875 17.785156 2.175781 17.738281 2.183594 C 17.691406 2.183594 17.300781 2.246094 16.863281 2.316406 Z M 16.863281 2.316406 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.308594 3.9375 C 13.554688 4.4375 11.023438 5.570312 8.96875 7.214844 C 8.09375 7.914062 7.644531 8.414062 7.332031 9.054688 C 6.929688 9.871094 6.921875 10.730469 7.324219 11.492188 C 7.414062 11.667969 7.421875 11.636719 7.40625 11.109375 C 7.371094 9.660156 8.285156 8.523438 10.652344 7.101562 C 12.363281 6.070312 13.59375 5.554688 15.523438 5.046875 L 16.460938 4.800781 L 16.730469 4.375 C 16.875 4.152344 17 3.945312 17 3.914062 C 17 3.863281 16.707031 3.871094 16.308594 3.9375 Z M 16.308594 3.9375 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.617188 7.96875 C 12.617188 8.015625 12.691406 8.117188 12.792969 8.207031 C 14.175781 9.445312 14.921875 11.316406 14.609375 12.785156 C 14.421875 13.652344 13.746094 14.746094 12.976562 15.429688 C 11.570312 16.675781 9.332031 17.914062 7.230469 18.625 C 6.339844 18.914062 4.707031 19.308594 4.347656 19.308594 C 4.070312 19.308594 4.109375 19.382812 4.5625 19.714844 C 4.914062 19.976562 4.992188 20 5.269531 19.953125 C 8.261719 19.460938 11.832031 17.847656 13.53125 16.207031 C 14.992188 14.808594 15.714844 13.023438 15.382812 11.609375 C 15.125 10.476562 14.144531 9.09375 13.015625 8.253906 C 12.863281 8.136719 12.707031 8.007812 12.675781 7.960938 C 12.636719 7.90625 12.617188 7.914062 12.617188 7.96875 Z M 12.617188 7.96875 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.539062 8.5 C 12.738281 9.398438 12.339844 10.429688 11.429688 11.347656 C 9.953125 12.832031 6.515625 14.554688 3.976562 15.078125 C 3.5625 15.160156 3.523438 15.183594 3.269531 15.585938 C 2.875 16.199219 2.871094 16.191406 3.769531 16.03125 C 3.875 16.015625 4.070312 15.976562 4.191406 15.953125 C 6.253906 15.59375 8.832031 14.429688 10.691406 13.03125 C 12.707031 11.507812 13.300781 10.300781 12.777344 8.808594 C 12.585938 8.269531 12.445312 8.085938 12.539062 8.5 Z M 12.539062 8.5 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.285156 9.738281 C 13.398438 11.015625 12.484375 12.40625 10.707031 13.675781 C 8.847656 15.007812 6.992188 15.800781 4.421875 16.375 C 3.871094 16.5 3.261719 16.625 3.070312 16.652344 C 2.699219 16.707031 2.722656 16.683594 2.316406 17.515625 L 2.152344 17.839844 L 2.332031 17.808594 C 2.421875 17.792969 2.636719 17.761719 2.808594 17.738281 C 5.308594 17.371094 8.230469 16.253906 10.332031 14.871094 C 12.128906 13.683594 13.101562 12.636719 13.523438 11.429688 C 13.746094 10.785156 13.730469 10.398438 13.4375 9.730469 L 13.246094 9.269531 Z M 13.285156 9.738281 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.078125 10.730469 C 14.0625 11.984375 13.023438 13.609375 11.484375 14.792969 C 10.144531 15.816406 8.160156 16.769531 5.929688 17.453125 C 4.984375 17.746094 3.691406 18.078125 3.0625 18.191406 C 2.898438 18.222656 2.769531 18.261719 2.769531 18.285156 C 2.769531 18.332031 3.199219 18.691406 3.445312 18.863281 C 3.625 18.976562 3.785156 18.984375 4.230469 18.875 C 4.339844 18.855469 4.53125 18.816406 4.652344 18.792969 C 5.429688 18.667969 7.523438 18.023438 8.363281 17.644531 C 9.375 17.183594 9.683594 17.03125 10.269531 16.683594 C 12.136719 15.585938 13.90625 13.722656 14.230469 12.53125 C 14.375 11.992188 14.332031 10.847656 14.144531 10.539062 C 14.101562 10.453125 14.078125 10.515625 14.078125 10.730469 Z M 14.078125 10.730469 "/></g></svg>',
    color: "#2c3335",
    rpcUrl: "https://evm.shibuya.astar.network",
    publicRpcUrl: "https://evm.shibuya.astar.network",
    blockExplorerUrl: "https://shibuya.subscan.io",
  },
  {
    id: "0x1111",
    token: "LOC",
    label: "Localhost",
    icon: '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">  <g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 19.976562 9.320312 C 19.601562 3.8125 14.832031 -0.351562 9.320312 0.0234375 C 6.578125 0.210938 4.167969 1.488281 2.484375 3.40625 L 2.480469 3.402344 C 2.46875 3.417969 2.457031 3.433594 2.445312 3.449219 C 0.777344 5.375 -0.164062 7.933594 0.0234375 10.679688 C 0.0429688 10.941406 0.0703125 11.199219 0.109375 11.453125 C 0.109375 11.464844 0.113281 11.476562 0.113281 11.488281 C 0.140625 11.65625 0.167969 11.824219 0.203125 11.988281 C 0.203125 11.992188 0.203125 11.992188 0.203125 11.996094 C 0.234375 12.148438 0.269531 12.292969 0.304688 12.441406 C 1.460938 17.046875 5.773438 20.308594 10.679688 19.976562 C 16.1875 19.601562 20.351562 14.832031 19.976562 9.320312 Z M 17.800781 9.46875 C 17.847656 10.148438 17.804688 10.8125 17.683594 11.449219 C 17.679688 11.449219 17.679688 11.445312 17.679688 11.441406 C 16.953125 9.667969 15.519531 8.386719 14.257812 7.683594 C 14.511719 4.679688 13.496094 3.414062 12.34375 3.207031 C 12.308594 3.203125 12.277344 3.195312 12.246094 3.191406 C 11.332031 3.074219 10.496094 3.722656 10.378906 4.636719 C 10.261719 5.550781 10.90625 6.390625 11.824219 6.507812 C 11.902344 6.515625 11.980469 6.519531 12.058594 6.519531 C 12.0625 6.621094 12.066406 6.726562 12.070312 6.839844 C 11.003906 6.574219 10.007812 6.523438 9.097656 6.605469 C 8.757812 6.628906 8.417969 6.671875 8.078125 6.734375 C 8.191406 5.71875 8.574219 4.582031 9.3125 3.75 C 10.023438 2.945312 11.085938 2.480469 12.242188 2.601562 C 12.460938 2.625 12.695312 2.675781 12.90625 2.746094 C 12.917969 2.75 12.925781 2.753906 12.9375 2.757812 C 15.617188 3.847656 17.589844 6.390625 17.800781 9.46875 Z M 10.828125 10.996094 C 10.828125 10.996094 10.828125 11 10.828125 11 C 10.589844 11.34375 10.304688 11.683594 9.972656 12.011719 C 9.472656 11.480469 9.070312 10.910156 8.765625 10.316406 C 8.75 10.285156 8.734375 10.253906 8.71875 10.222656 C 8.71875 10.222656 8.71875 10.21875 8.71875 10.21875 C 8.539062 9.839844 8.386719 9.425781 8.269531 8.972656 C 8.980469 8.804688 9.675781 8.742188 10.34375 8.773438 C 10.378906 8.777344 10.414062 8.777344 10.449219 8.78125 C 10.449219 8.78125 10.449219 8.78125 10.453125 8.78125 C 10.867188 8.816406 11.304688 8.890625 11.753906 9.015625 C 11.542969 9.714844 11.25 10.347656 10.886719 10.910156 C 10.867188 10.9375 10.851562 10.96875 10.828125 10.996094 Z M 7.414062 2.625 C 7.410156 2.625 7.410156 2.628906 7.40625 2.632812 C 6.234375 4.144531 5.84375 6.023438 5.863281 7.46875 C 3.132812 8.75 2.546875 10.265625 2.945312 11.367188 C 2.957031 11.394531 2.96875 11.425781 2.980469 11.457031 C 3.335938 12.308594 4.316406 12.707031 5.167969 12.351562 C 6.015625 11.996094 6.417969 11.019531 6.0625 10.167969 C 6.03125 10.09375 5.996094 10.023438 5.953125 9.957031 C 6.039062 9.898438 6.132812 9.84375 6.230469 9.785156 C 6.535156 10.839844 6.984375 11.734375 7.511719 12.480469 C 7.699219 12.761719 7.90625 13.035156 8.128906 13.296875 C 7.195312 13.703125 6.019531 13.945312 4.929688 13.722656 C 3.875 13.503906 2.945312 12.816406 2.46875 11.757812 C 2.378906 11.554688 2.308594 11.324219 2.261719 11.109375 C 2.234375 10.917969 2.214844 10.726562 2.199219 10.53125 C 1.957031 6.949219 4.179688 3.757812 7.414062 2.625 Z M 10.53125 17.800781 C 8.402344 17.945312 6.414062 17.21875 4.914062 15.929688 C 6.808594 16.1875 8.632812 15.585938 9.875 14.847656 C 12.347656 16.570312 13.953125 16.320312 14.710938 15.425781 C 14.730469 15.402344 14.75 15.378906 14.769531 15.351562 C 15.328125 14.617188 15.1875 13.570312 14.453125 13.011719 C 13.71875 12.453125 12.671875 12.59375 12.113281 13.328125 C 12.0625 13.390625 12.023438 13.457031 11.984375 13.527344 C 11.894531 13.480469 11.796875 13.429688 11.699219 13.371094 C 12.460938 12.582031 13.003906 11.742188 13.390625 10.914062 C 13.539062 10.609375 13.671875 10.292969 13.785156 9.96875 C 14.609375 10.574219 15.40625 11.472656 15.757812 12.53125 C 16.097656 13.550781 15.96875 14.699219 15.285156 15.644531 C 15.15625 15.820312 14.992188 15.996094 14.828125 16.144531 C 14.824219 16.148438 14.824219 16.148438 14.820312 16.152344 C 13.628906 17.089844 12.152344 17.691406 10.53125 17.800781 Z M 10.53125 17.800781 "/></g></svg>',
    color: "#2c3335",
    rpcUrl: "http://locahost:8545",
    publicRpcUrl: "http://locahost:8545",
    blockExplorerUrl:
      "https://polkadot.js.org/apps/?rpc=ws%3A%2F%2Flocalhost%3A9944#/explorer",
  },
];
const appMetadata = {
  name: "This is a demo React App",
  icon: '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 16.042969 7.058594 C 15.839844 6.992188 15.640625 6.925781 15.4375 6.867188 C 15.472656 6.730469 15.503906 6.59375 15.53125 6.457031 C 15.988281 4.234375 15.6875 2.441406 14.667969 1.851562 C 13.691406 1.289062 12.089844 1.878906 10.476562 3.285156 C 10.316406 3.425781 10.160156 3.570312 10.007812 3.714844 C 9.90625 3.617188 9.804688 3.523438 9.695312 3.429688 C 8.003906 1.921875 6.304688 1.289062 5.285156 1.878906 C 4.308594 2.445312 4.019531 4.128906 4.429688 6.234375 C 4.472656 6.445312 4.519531 6.652344 4.570312 6.859375 C 4.328125 6.925781 4.097656 7 3.875 7.078125 C 1.894531 7.769531 0.625 8.855469 0.625 9.984375 C 0.625 11.148438 1.984375 12.316406 4.054688 13.023438 C 4.222656 13.082031 4.390625 13.136719 4.5625 13.183594 C 4.507812 13.40625 4.457031 13.628906 4.414062 13.855469 C 4.023438 15.925781 4.328125 17.570312 5.304688 18.132812 C 6.308594 18.714844 8 18.117188 9.644531 16.675781 C 9.773438 16.558594 9.90625 16.441406 10.035156 16.3125 C 10.199219 16.472656 10.367188 16.625 10.542969 16.777344 C 12.136719 18.148438 13.710938 18.707031 14.683594 18.140625 C 15.6875 17.558594 16.015625 15.792969 15.589844 13.644531 C 15.558594 13.480469 15.519531 13.3125 15.480469 13.140625 C 15.597656 13.105469 15.714844 13.070312 15.828125 13.03125 C 17.976562 12.320312 19.375 11.164062 19.375 9.984375 C 19.375 8.851562 18.066406 7.757812 16.042969 7.058594 Z M 11.003906 3.890625 C 12.386719 2.683594 13.679688 2.207031 14.269531 2.546875 C 14.898438 2.910156 15.140625 4.375 14.746094 6.292969 C 14.722656 6.417969 14.691406 6.542969 14.664062 6.667969 C 13.835938 6.480469 13 6.347656 12.15625 6.269531 C 11.671875 5.574219 11.144531 4.914062 10.570312 4.289062 C 10.710938 4.152344 10.855469 4.019531 11 3.890625 Z M 6.160156 10.945312 C 6.332031 11.273438 6.507812 11.597656 6.691406 11.917969 C 6.882812 12.246094 7.078125 12.566406 7.28125 12.882812 C 6.703125 12.820312 6.125 12.730469 5.554688 12.605469 C 5.71875 12.070312 5.921875 11.515625 6.160156 10.945312 Z M 6.160156 9.058594 C 5.925781 8.503906 5.726562 7.960938 5.566406 7.433594 C 6.101562 7.3125 6.671875 7.214844 7.265625 7.140625 C 7.066406 7.453125 6.875 7.765625 6.691406 8.085938 C 6.507812 8.40625 6.328125 8.730469 6.160156 9.058594 Z M 6.585938 10.003906 C 6.832031 9.488281 7.101562 8.984375 7.382812 8.488281 C 7.667969 7.992188 7.972656 7.511719 8.292969 7.039062 C 8.851562 6.996094 9.421875 6.972656 10 6.972656 C 10.578125 6.972656 11.152344 6.996094 11.710938 7.039062 C 12.03125 7.511719 12.332031 7.992188 12.617188 8.484375 C 12.898438 8.976562 13.167969 9.480469 13.421875 9.992188 C 13.171875 10.507812 12.902344 11.015625 12.617188 11.511719 C 12.332031 12.007812 12.035156 12.492188 11.71875 12.96875 C 11.164062 13.007812 10.585938 13.027344 10 13.027344 C 9.414062 13.027344 8.847656 13.007812 8.300781 12.972656 C 7.980469 12.5 7.671875 12.015625 7.386719 11.515625 C 7.097656 11.019531 6.832031 10.515625 6.585938 10.003906 Z M 13.3125 11.914062 C 13.5 11.585938 13.679688 11.253906 13.855469 10.917969 C 14.09375 11.457031 14.300781 12.011719 14.484375 12.570312 C 13.90625 12.703125 13.324219 12.800781 12.734375 12.871094 C 12.933594 12.554688 13.125 12.238281 13.3125 11.914062 Z M 13.847656 9.058594 C 13.671875 8.730469 13.492188 8.40625 13.308594 8.082031 C 13.125 7.765625 12.933594 7.453125 12.738281 7.144531 C 13.335938 7.21875 13.910156 7.320312 14.445312 7.441406 C 14.273438 7.992188 14.074219 8.53125 13.847656 9.058594 Z M 10.007812 4.863281 C 10.398438 5.289062 10.765625 5.734375 11.113281 6.199219 C 10.375 6.164062 9.636719 6.164062 8.894531 6.199219 C 9.261719 5.714844 9.632812 5.269531 10.007812 4.863281 Z M 5.691406 2.574219 C 6.316406 2.207031 7.703125 2.730469 9.167969 4.027344 C 9.257812 4.113281 9.355469 4.199219 9.449219 4.289062 C 8.871094 4.914062 8.339844 5.574219 7.851562 6.269531 C 7.011719 6.347656 6.175781 6.476562 5.347656 6.660156 C 5.300781 6.46875 5.257812 6.277344 5.21875 6.082031 C 4.867188 4.277344 5.101562 2.914062 5.691406 2.574219 Z M 4.773438 12.410156 C 4.617188 12.367188 4.464844 12.316406 4.3125 12.265625 C 3.398438 11.953125 2.644531 11.546875 2.125 11.101562 C 1.660156 10.703125 1.425781 10.304688 1.425781 9.984375 C 1.425781 9.300781 2.445312 8.425781 4.140625 7.835938 C 4.355469 7.761719 4.570312 7.695312 4.785156 7.632812 C 5.039062 8.441406 5.34375 9.234375 5.699219 10.003906 C 5.339844 10.785156 5.03125 11.589844 4.777344 12.410156 Z M 9.117188 16.070312 C 8.390625 16.707031 7.660156 17.160156 7.015625 17.386719 C 6.441406 17.589844 5.980469 17.597656 5.703125 17.4375 C 5.109375 17.09375 4.863281 15.773438 5.199219 14.003906 C 5.238281 13.796875 5.285156 13.585938 5.335938 13.378906 C 6.171875 13.558594 7.015625 13.679688 7.863281 13.746094 C 8.355469 14.445312 8.894531 15.109375 9.472656 15.738281 C 9.355469 15.851562 9.238281 15.964844 9.117188 16.070312 Z M 10.03125 15.164062 C 9.652344 14.75 9.273438 14.296875 8.902344 13.808594 C 9.261719 13.824219 9.628906 13.832031 10 13.832031 C 10.382812 13.832031 10.761719 13.820312 11.132812 13.804688 C 10.789062 14.277344 10.421875 14.730469 10.03125 15.164062 Z M 14.894531 16.277344 C 14.785156 16.882812 14.558594 17.285156 14.28125 17.445312 C 13.691406 17.789062 12.425781 17.34375 11.0625 16.167969 C 10.90625 16.03125 10.75 15.890625 10.59375 15.738281 C 11.160156 15.105469 11.6875 14.4375 12.164062 13.738281 C 13.019531 13.664062 13.867188 13.535156 14.703125 13.34375 C 14.742188 13.5 14.773438 13.652344 14.804688 13.800781 C 14.992188 14.75 15.019531 15.609375 14.894531 16.28125 Z M 15.574219 12.269531 C 15.472656 12.304688 15.367188 12.335938 15.261719 12.367188 C 14.996094 11.554688 14.679688 10.757812 14.308594 9.988281 C 14.667969 9.226562 14.972656 8.445312 15.222656 7.640625 C 15.414062 7.699219 15.601562 7.757812 15.78125 7.820312 C 17.515625 8.417969 18.574219 9.304688 18.574219 9.984375 C 18.574219 10.710938 17.429688 11.652344 15.574219 12.269531 Z M 15.574219 12.269531 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 10 11.664062 C 10.679688 11.664062 11.292969 11.257812 11.554688 10.628906 C 11.816406 10 11.675781 9.277344 11.195312 8.796875 C 10.714844 8.316406 9.992188 8.171875 9.363281 8.429688 C 8.734375 8.691406 8.324219 9.300781 8.324219 9.984375 C 8.324219 10.910156 9.074219 11.660156 10 11.664062 Z M 10 11.664062 "/></g></svg>',
  logo: '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 16.042969 7.058594 C 15.839844 6.992188 15.640625 6.925781 15.4375 6.867188 C 15.472656 6.730469 15.503906 6.59375 15.53125 6.457031 C 15.988281 4.234375 15.6875 2.441406 14.667969 1.851562 C 13.691406 1.289062 12.089844 1.878906 10.476562 3.285156 C 10.316406 3.425781 10.160156 3.570312 10.007812 3.714844 C 9.90625 3.617188 9.804688 3.523438 9.695312 3.429688 C 8.003906 1.921875 6.304688 1.289062 5.285156 1.878906 C 4.308594 2.445312 4.019531 4.128906 4.429688 6.234375 C 4.472656 6.445312 4.519531 6.652344 4.570312 6.859375 C 4.328125 6.925781 4.097656 7 3.875 7.078125 C 1.894531 7.769531 0.625 8.855469 0.625 9.984375 C 0.625 11.148438 1.984375 12.316406 4.054688 13.023438 C 4.222656 13.082031 4.390625 13.136719 4.5625 13.183594 C 4.507812 13.40625 4.457031 13.628906 4.414062 13.855469 C 4.023438 15.925781 4.328125 17.570312 5.304688 18.132812 C 6.308594 18.714844 8 18.117188 9.644531 16.675781 C 9.773438 16.558594 9.90625 16.441406 10.035156 16.3125 C 10.199219 16.472656 10.367188 16.625 10.542969 16.777344 C 12.136719 18.148438 13.710938 18.707031 14.683594 18.140625 C 15.6875 17.558594 16.015625 15.792969 15.589844 13.644531 C 15.558594 13.480469 15.519531 13.3125 15.480469 13.140625 C 15.597656 13.105469 15.714844 13.070312 15.828125 13.03125 C 17.976562 12.320312 19.375 11.164062 19.375 9.984375 C 19.375 8.851562 18.066406 7.757812 16.042969 7.058594 Z M 11.003906 3.890625 C 12.386719 2.683594 13.679688 2.207031 14.269531 2.546875 C 14.898438 2.910156 15.140625 4.375 14.746094 6.292969 C 14.722656 6.417969 14.691406 6.542969 14.664062 6.667969 C 13.835938 6.480469 13 6.347656 12.15625 6.269531 C 11.671875 5.574219 11.144531 4.914062 10.570312 4.289062 C 10.710938 4.152344 10.855469 4.019531 11 3.890625 Z M 6.160156 10.945312 C 6.332031 11.273438 6.507812 11.597656 6.691406 11.917969 C 6.882812 12.246094 7.078125 12.566406 7.28125 12.882812 C 6.703125 12.820312 6.125 12.730469 5.554688 12.605469 C 5.71875 12.070312 5.921875 11.515625 6.160156 10.945312 Z M 6.160156 9.058594 C 5.925781 8.503906 5.726562 7.960938 5.566406 7.433594 C 6.101562 7.3125 6.671875 7.214844 7.265625 7.140625 C 7.066406 7.453125 6.875 7.765625 6.691406 8.085938 C 6.507812 8.40625 6.328125 8.730469 6.160156 9.058594 Z M 6.585938 10.003906 C 6.832031 9.488281 7.101562 8.984375 7.382812 8.488281 C 7.667969 7.992188 7.972656 7.511719 8.292969 7.039062 C 8.851562 6.996094 9.421875 6.972656 10 6.972656 C 10.578125 6.972656 11.152344 6.996094 11.710938 7.039062 C 12.03125 7.511719 12.332031 7.992188 12.617188 8.484375 C 12.898438 8.976562 13.167969 9.480469 13.421875 9.992188 C 13.171875 10.507812 12.902344 11.015625 12.617188 11.511719 C 12.332031 12.007812 12.035156 12.492188 11.71875 12.96875 C 11.164062 13.007812 10.585938 13.027344 10 13.027344 C 9.414062 13.027344 8.847656 13.007812 8.300781 12.972656 C 7.980469 12.5 7.671875 12.015625 7.386719 11.515625 C 7.097656 11.019531 6.832031 10.515625 6.585938 10.003906 Z M 13.3125 11.914062 C 13.5 11.585938 13.679688 11.253906 13.855469 10.917969 C 14.09375 11.457031 14.300781 12.011719 14.484375 12.570312 C 13.90625 12.703125 13.324219 12.800781 12.734375 12.871094 C 12.933594 12.554688 13.125 12.238281 13.3125 11.914062 Z M 13.847656 9.058594 C 13.671875 8.730469 13.492188 8.40625 13.308594 8.082031 C 13.125 7.765625 12.933594 7.453125 12.738281 7.144531 C 13.335938 7.21875 13.910156 7.320312 14.445312 7.441406 C 14.273438 7.992188 14.074219 8.53125 13.847656 9.058594 Z M 10.007812 4.863281 C 10.398438 5.289062 10.765625 5.734375 11.113281 6.199219 C 10.375 6.164062 9.636719 6.164062 8.894531 6.199219 C 9.261719 5.714844 9.632812 5.269531 10.007812 4.863281 Z M 5.691406 2.574219 C 6.316406 2.207031 7.703125 2.730469 9.167969 4.027344 C 9.257812 4.113281 9.355469 4.199219 9.449219 4.289062 C 8.871094 4.914062 8.339844 5.574219 7.851562 6.269531 C 7.011719 6.347656 6.175781 6.476562 5.347656 6.660156 C 5.300781 6.46875 5.257812 6.277344 5.21875 6.082031 C 4.867188 4.277344 5.101562 2.914062 5.691406 2.574219 Z M 4.773438 12.410156 C 4.617188 12.367188 4.464844 12.316406 4.3125 12.265625 C 3.398438 11.953125 2.644531 11.546875 2.125 11.101562 C 1.660156 10.703125 1.425781 10.304688 1.425781 9.984375 C 1.425781 9.300781 2.445312 8.425781 4.140625 7.835938 C 4.355469 7.761719 4.570312 7.695312 4.785156 7.632812 C 5.039062 8.441406 5.34375 9.234375 5.699219 10.003906 C 5.339844 10.785156 5.03125 11.589844 4.777344 12.410156 Z M 9.117188 16.070312 C 8.390625 16.707031 7.660156 17.160156 7.015625 17.386719 C 6.441406 17.589844 5.980469 17.597656 5.703125 17.4375 C 5.109375 17.09375 4.863281 15.773438 5.199219 14.003906 C 5.238281 13.796875 5.285156 13.585938 5.335938 13.378906 C 6.171875 13.558594 7.015625 13.679688 7.863281 13.746094 C 8.355469 14.445312 8.894531 15.109375 9.472656 15.738281 C 9.355469 15.851562 9.238281 15.964844 9.117188 16.070312 Z M 10.03125 15.164062 C 9.652344 14.75 9.273438 14.296875 8.902344 13.808594 C 9.261719 13.824219 9.628906 13.832031 10 13.832031 C 10.382812 13.832031 10.761719 13.820312 11.132812 13.804688 C 10.789062 14.277344 10.421875 14.730469 10.03125 15.164062 Z M 14.894531 16.277344 C 14.785156 16.882812 14.558594 17.285156 14.28125 17.445312 C 13.691406 17.789062 12.425781 17.34375 11.0625 16.167969 C 10.90625 16.03125 10.75 15.890625 10.59375 15.738281 C 11.160156 15.105469 11.6875 14.4375 12.164062 13.738281 C 13.019531 13.664062 13.867188 13.535156 14.703125 13.34375 C 14.742188 13.5 14.773438 13.652344 14.804688 13.800781 C 14.992188 14.75 15.019531 15.609375 14.894531 16.28125 Z M 15.574219 12.269531 C 15.472656 12.304688 15.367188 12.335938 15.261719 12.367188 C 14.996094 11.554688 14.679688 10.757812 14.308594 9.988281 C 14.667969 9.226562 14.972656 8.445312 15.222656 7.640625 C 15.414062 7.699219 15.601562 7.757812 15.78125 7.820312 C 17.515625 8.417969 18.574219 9.304688 18.574219 9.984375 C 18.574219 10.710938 17.429688 11.652344 15.574219 12.269531 Z M 15.574219 12.269531 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 10 11.664062 C 10.679688 11.664062 11.292969 11.257812 11.554688 10.628906 C 11.816406 10 11.675781 9.277344 11.195312 8.796875 C 10.714844 8.316406 9.992188 8.171875 9.363281 8.429688 C 8.734375 8.691406 8.324219 9.300781 8.324219 9.984375 C 8.324219 10.910156 9.074219 11.660156 10 11.664062 Z M 10 11.664062 "/></g></svg>',
  description: "My app using Onboard on Astar Network",
  recommendedInjectedWallets: [
    { name: "Talisman", url: "https://www.talisman.xyz/" },
    { name: "MetaMask", url: "https://metamask.io" },
  ],
};

// initialize Onboard
init({
  wallets,
  chains,
  appMetadata,
});

// Create the context
const WalletContext = createContext();

// Custom hook to access the context
export const useWallet = () => useContext(WalletContext);

// Provider component
export const WalletProvider = ({ children }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.BrowserProvider(
      wallet.provider,
      "any"
    );
  }

  // Provide the values to the context
  const value = {
    wallet,
    connecting,
    connect,
    disconnect,
    ethersProvider,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
