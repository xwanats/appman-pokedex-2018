import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

import {
  checkObjLen,
  getDmg,
  calculateDamage,
  calculateHP,
  calculateStr,
  calculateHappiness,
  calculateWeakness,
} from "../statusCal.js";

import "../style/cardStyle.css";
const url = "http://localhost:3030/api/cards";

const Card = ({pokemonData}) => {
  return (
    <div>
      <SearchBar pokemonData={pokemonData} />
      <table className="tableConfig">
        <tbody>
          
          {pokemonData &&
            pokemonData.cards.map((item) => (
              <tr key={item.id} className="cardRow">
                <td className="imageContainer">
                  <img src={item.imageUrl} className="imageStyle" />
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td className="nameStyle">{item.name}</td>
                      </tr>
                      <tr>
                        <td>Hp:{calculateHP(parseInt(item.hp))}</td>
                      </tr>
                      <tr>
                        <td>STR:{calculateStr(checkObjLen(item.attacks))}</td>
                      </tr>
                      <tr>
                        <td>
                          WEAK:{calculateWeakness(checkObjLen(item.weaknesses))}
                        </td>
                      </tr>
                      {/* Do NOT DISPLAY -> FOR DEBUGGING ONLY */}
                      <tr>
                        <td>DMG:{calculateDamage(getDmg(item.attacks))}</td>
                      </tr>
                      <tr>
                        <div className="happyConatiner">
                          <td className="imgHappy">
                            {calculateHappiness(
                              parseInt(item.hp),
                              calculateDamage(getDmg(item.attacks)),
                              calculateWeakness(checkObjLen(item.weaknesses))
                            )}
                          </td>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Card;
