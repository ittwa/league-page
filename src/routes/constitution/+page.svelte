<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo, oneThree, oneFour;
    let two, twoOne, twoTwo, twoThree, twoFour;
    let three, threeOne, threeTwo, threeThree;
    let four, fourOne, fourTwo, fourThree;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive, fiveSix, fiveSeven, fiveEight, fiveNine;
    let six, sixOne, sixTwo, sixThree, sixFour, sixFive, sixSix;
    let seven, sevenOne, sevenTwo, sevenThree;
    let eight, eightOne, eightTwo, eightThree;
    let nine, nineOne, nineTwo, nineThree, nineFour;
    let ten, tenOne, tenTwo;
    let eleven, elevenOne, elevenTwo, elevenThree;
    let twelve, twelveOne;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">ITTWA CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Article 1: Membership</h3>
       
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 League Size</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Annual Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Payment Schedule</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.4 League Platform</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Article 2: Ownership</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Ownership of Team</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Waiting List</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 New Owners</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.4 Co-Ownership</h4>

    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Article 3: Governance</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Code of Conduct</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.2 Voting</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.3 Removal Procedures</h4>

    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Article 4: Administration</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Commissioner Power</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Assistant to the Commissioner</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.3 Treasury</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Article 5: Team Management</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 Roster Configuration</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.2 Salary Cap</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.3 Years Cap</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.4 Salary Payment Timing</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.5 Franchise Tag</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.6 Retirement</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.7 Cap Hit Size</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.8 Cap Hit Payment Schedule</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.9 Claim of a Cut Player</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Article 6: Rookie Draft</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Definition</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Player Universe</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Trading</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.4 Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.5 Schedule</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.6 Contracts</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 7: Free Agency</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 Definition</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Restricted Free Agents</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Free Agent Auction</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.4 Free Agent Auction Values</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 8: Divisions</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>8.1 Permanence</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>8.2 Breakdown</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 9: Schedule and Playoffs</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>9.1 Schedule</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>9.2 Playoff Seedings</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>9.3 Tie-Breakers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>9.4 Playoff Format</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 10: Trades</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>10.1 Trade Deadline</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>10.2 Tradeable Assets</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 11: Waiver Wire</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>11.1 Waiver Type</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>11.2 Waiver Schedule</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>11.3 Waiver Time</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 12: Scoring</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>12.1 Scoring</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 13: Amendments</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>13.1 Rule Changes</h4>


    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 14: Payouts</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>14.1 Payouts</h4>


    <hr />


    <h2 class="sectionHeading" bind:this={one}>Article 1 - Membership</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 League Size</h3>
    <p>The composition of membership for the League shall be twelve (12) Owners.</p>

    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Annual Dues</h3>
    <p>The current annual cost of ownership is $150.</p>
    
    <h3 bind:this={oneThree}>1.3 Payment Schedule</h3>
    <p>Payment of the membership fee must be turned in to the Commish (cash or Venmo) by the date of the Free Agent Auction.</p>

    <h3 bind:this={oneFour}>1.4 League Platform</h3>
    <p>The League will use <a href="https://sleeper.com/leagues/918205115247595520/matchup">Sleeper</a> as the platform.</p>


    
    <h2 class="sectionHeading" bind:this={two}>Article 2 - Ownership</h2>
    
    <h3 bind:this={twoOne}>2.1 Ownership of Team</h3>
    <p>Ownership of a membership lies in the hands of the League.  A member may not sell his rights of Ownership to anyone.  If a member wishes to leave the League, he shall report his decision to the Commissioner who will in-turn alert the other members of the League and begin to contact individuals on the League’s Waiting List in search of a replacement.</p>

    <h3 bind:this={twoTwo}>2.2 Waiting List</h3>
    <p>The New Owner will be selected from the <a href="https://docs.google.com/spreadsheets/d/17kspYjtSNtiBuUxbdWYkHbP8Y5K7qs0nJ-D1VA-Wpwo/edit?pli=1#gid=372338541">Waiting List</a> in the order by which they joined. The potential New Owner who has been on the Waiting List the longest will have the first shot to be voted in by the current Owners.</p>
    
    <h3 bind:this={twoThree}>2.3 New Owners</h3>
    <p>New Owners must be voted in by the rest of the League (majority vote) in order to avoid douchebags and uncommitted owners.  The new member must have a Sponsor that recommends them to the League.</p>

    <h3 bind:this={twoFour}>2.4 Co-Ownership</h3>
    <p>Teams may be co-owned.</p>


    
    <h2 class="sectionHeading" bind:this={three}>Article 3 - Governance</h2>

    <h3 bind:this={threeOne}>3.1 Code of Conduct</h3>
    <p>All active members of the League are expected to conduct themselves in a manner consistent with that of a Gentleman.  This code of ethics includes, but is not limited to: only ripping fellow Owners as much as they can handle; being respectful of and sensitive to Liam’s (mental, phyiscal, and mental) disabilities; not dropping players out of anger, frustration, or resentment (or some stupid, personal NFL boycott or other such nonsense); not partaking in collusion of any sort.</p>

    <h3 bind:this={threeTwo}>3.2 Voting</h3>
    <p>This League is run as a democracy. All matters of significance will be determined by a vote. If it is a vote on a proposed new rule, that rule will pass with a majority (>50%) vote. If it is a vote to overturn an existing rule then a ⅔ quorum is needed to pass the vote. Each team receives a single vote. If a team is co-owned, only one vote from that co-ownership will be counted.</p>

    <h3 bind:this={threeThree}>3.3 Removal Procedures</h3>
    <p>If there are grounds (complaints from several Owners, inactivity, lack of communication, repeated violations to the Code of Conduct, etc.) to remove an Owner from the League the Commish will first discuss the potential removal with the Owner. If the Commish deems there is a reasonable case for removal of the Owner, the Commish and the Owner will present the case to the rest of the League. If a solution cannot be reached without a vote, a vote for removal will be had. A ⅔ quorum is needed to pass the vote to remove the Owner from the League.</p>



    <h2 class="sectionHeading" bind:this={four}>Article 4 - Administration</h2>
    
    <h3 bind:this={fourOne}>4.1 Commissioner Power</h3>
    <p>This League is a democracy. The Commish will enforce existing rules, handle the administrative activities of the League, and will facilitate day-to-day operations and decisions of the League. The Commish cannot create/amend rules or make significant decisions by himself.</p>
    
    <h3 bind:this={fourTwo}>4.2 Assistant to the Commissioner</h3>
    <p>The ATTC will be the Commish’s bitch.</p>

    <h3 bind:this={fourThree}>4.3 Treasury</h3>
    <p>The Commissioner is responsible for collecting the membership dues at the beginning of the season, holding said dues throughout the season, and distributing the funds at the conclusion of the season within ten (10) days of the conclusion of the Championship game (Week 16).</p>



    <h2 class="sectionHeading" bind:this={five}>Article 5 - Team Management</h2>
    
    <h3 bind:this={fiveOne}>5.1 Roster Configuration</h3>
    <p>Teams will consist of 22 players. Each week, an Owner will start 1 QB, 2 RB, 3 WR, 1 TE, 1 D/ST, and 1 Flex. There will be 13 bench spots, plus 4 Injured Reserve spots. 2 Players may return from the IR throughout the season.</p>

    <h3 bind:this={fiveTwo}>5.2 Salary Cap</h3>
    <p>By the end of the Free Agent Auction, all teams will be required to have a full roster of 20 players, that is below or equal to $270. The team’s total salaries must add up to at least $220, not counting cap penalties. If a team cannot meet this requirement, the Commissioner will push back the appropriate amount of cap penalties until the next season, so that they can draft a full team that meets the cap floor. The cap penalties that are pushed back to the next season will be counted at 150% of their original value. This rule is to prevent a team from taking on a ton of cap penalties all in one year, being terrible, but then having tons of money available for next year. The Salary Cap will only apply at the draft. Teams can exceed the cap during the season, but they must be under or at it by the FA Auction</p>

    <h3 bind:this={fiveThree}>5.3 Years Cap</h3>
    <p>The total Years from all Players on a roster may not exceed 60. The Years Cap will only apply at the draft. Teams can exceed the cap during the season, but they must be under or at it by the FA Auction.</p>

    <h3 bind:this={fiveFour}>5.4 Salary Payment Timing</h3>
    <p>Salaries are considered to be paid in full for the upcoming season at the conclusion of the annual Free Agent Auction. This means that if a player is cut anytime after the Free Agent Auction, no cap hit penalty will be incurred for the current season.</p>

    <h3 bind:this={fiveFive}>5.5 Franchise Tag</h3>
    <p>At the end of the season you are allowed, but not required, to use a franchise tag on one player whose contract has just expired. In order to be eligible, the player must have been rostered and under contract at the end of the previous season. If exercised, the player will be extended a one-year contract which will be the average of the five highest salaries of the players at his position for the previous year, or 120% of the amount of his previous year’s contract (whichever is greater). Consecutive tags are allowed. The second consecutive year of franchise tagging will be for 120% of the previous season’s salary. The third consecutive year of franchise tagging will be for 144% of the previous season’s salary. The deadline to franchise a player is the third Friday in June.</p>

    <h3 bind:this={fiveSix}>5.6 Retirement</h3>
    <p>In the event of a player with remaining years on his contract, the owner will be allowed to drop the remaining contract for half of the normal penalty, which equals 1/4 the remaining contract. Once the contract is dropped, the owner will no longer be tied to that player/contract. If the player comes back into the league at any point after retirement, he will return as a free agent and will be put into the Free Agent Pool.</p>

    <h3 bind:this={fiveSeven}>5.7 Cap Hit Size</h3>
    <p>If a player is cut with years left on his contract, the Owner will be penalized 50% of the remaining contract value. All penalties are rounded to one decimal.</p>

    <h3 bind:this={fiveEight}>5.8 Cap Hit Payment Schedule</h3>
    <p>The penalty can be applied in either a lump sum at the end of that season or spread evenly through the remaining years of the contract. The Owner must choose which option they want to use before the next season’s Free Agent Auction.</p>

    <h3 bind:this={fiveNine}>5.9 Claim of a Cut Player</h3>
    <p>If a Player who is cut is immediately claimed on waivers (during the same week that the player is dropped), there will be no penalty to the Owner who cut the Player. The Owner who claimed the Player on waivers will assume the contract of the player.</p>



    <h2 class="sectionHeading" bind:this={six}>Article 6 - Rookie Draft</h2>
    
    <h3 bind:this={sixOne}>6.1 Definition</h3>
    <p>Following the NFL Draft and prior to the League’s Free Agent Auction, there will be a two (2) round draft in which Owners will select Rookies to add to their teams.</p>
    
    <h3 bind:this={sixTwo}>6.2 Player Universe</h3>
    <p>Draft picks will be in the League’s Player Universe for two (2) seasons in advance. For example, during the 2020 season each team will have been awarded two (2) rounds of picks for the 2021 and 2022 seasons. Following the 2021 Rookie Draft, each team will be awarded two (2) rounds of draft picks for the 2023 season.</p>
    
    <h3 bind:this={sixThree}>6.3 Trading</h3>
    <p>Trading of Rookie Draft picks is allowed.</p>

    <h3 bind:this={sixFour}>6.4 Order</h3>
    <ol>
    <li> The Rookie Draft is not a snake draft. The order listed below will apply to both the first and second rounds.</li>
    <li> The first six (6) picks will be owned by the non-playoff teams of the prior season and are determined by reverse order of optimal points (fewest to most).</li>
    <li> Picks 7 and 8 go to the reverse order of optimal points of the losers of wildcard games, for the wildcard games only (thus who would have won in the playoffs).</li>
    <li> Pick 9 is awarded to the loser of the 3rd place consolation game.</li>
    <li> Pick10 is awarded to the winner of the 3rd place consolation game.</li>
    <li> Pick 11 is awarded to the prior season’s runner-up.</li>
    <li> Pick 12 is awarded to the prior season’s champion.</li>
    </ol>

    <h3 bind:this={sixFive}>6.5 Schedule</h3>
    <p>Each Owner has 12 hours to make his/her draft pick. Once a selection is made, the 12 hour clock resets for the next Owner to make his/her pick.</p>

    <h3 bind:this={sixSix}>6.6 Contracts</h3>
    <table style="border: 1px solid black;">
      <tr>
        <th style="border: 1px solid black;"><b>Pick</b></th>
        <th style="border: 1px solid black;"><b>Years</b></th>
        <th style="border: 1px solid black;"><b>Salary</b></th>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.01</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$14</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.02</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$13</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.03</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$12</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.04</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$11</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.05</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$10</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.06</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$9</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.07</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$8</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.08</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$8</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.09</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$8</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.10</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$8</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.11</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$8</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">1.12</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$8</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.01</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$7</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.02</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$6</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.03</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$5</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.04</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$4</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.05</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$3</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.06</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.07</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.08</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.09</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.10</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.11</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
      <tr>
        <td style="border: 1px solid black;">2.12</td>
        <td style="border: 1px solid black;">4</td>
        <td style="border: 1px solid black;">$2</td>
      </tr>
    </table>



    <h2 class="sectionHeading" bind:this={seven}>Article 7 - Free Agency</h2>
    
    <h3 bind:this={sevenOne}>7.1 Definition</h3>
    <p>After the conclusion of the final season on a Player’s contract, he is considered to be a Free Agent. All Free Agents are eligible to be bid on in the Free Agent Auction.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>All free agents who were on a roster at the end of the prior season, regardless of their contract, are considered Restricted Free Agents (RFAs). The previous Owner of that RFA has the ability to match another team’s contract offer on that player during the Free Agent Auction.</p>

    <h3 bind:this={sevenThree}>7.3 Free Agent Auction Values</h3>
    <p>Prior to the start of the NFL season, the Owners will meet for the Free Agent Auction. Teams will only be able to bid using the amount of cash and years they have available against the Salary and Contract Cap. Unlike in the original draft, you may match someone’s bid if you add more years to the contract. All free agents who were on a roster at the end of the prior season, regardless of their contract, are considered Restricted Free Agents (RFA). The previous owner of that RFA has the ability to match another team’s contract offer during the Free Agent Auction.</p>



    <h2 class="sectionHeading" bind:this={eight}>Article 8 - Divisions</h2>
    
    <h3 bind:this={eightOne}>8.1 Permanence</h3>
    <p>The divisions will remain constant year-over-year to instill a sense of rivalry.</p>
    
    <h3 bind:this={eightTwo}>8.2 Breakdown</h3>
    <ul>
      <li>Concussion
        <ul>
          <li>Tiger</li>
          <li>Liam</li>
          <li>Katz</li>
        </ul>
      </li>
      <li>Hey Arnold
        <ul>
          <li>Chapman</li>
          <li>Jorge</li>
          <li>Durkin</li>
        </ul>
      </li>
      <li>Replacements
        <ul>
          <li>Peterson</li>
          <li>Cummings</li>
          <li>RyBo</li>
        </ul>
      </li>
      <li>Dark Knight Rises
        <ul>
          <li>HoganLamb</li>
          <li>Breezy</li>
          <li>JWill</li>
        </ul>
      </li>
    </ul>



    <h2 class="sectionHeading" bind:this={nine}>Article 9 - Schedule and Playoffs</h2>
    
    <h3 bind:this={nineOne}>9.1 Schedule</h3>
    <p>The regular season will consist of thirteen matchups. Each Owner will play his division rivals twice and all other Owners once. </p>
    
    <h3 bind:this={nineTwo}>9.2 Playoff Seedings</h3>
    <p>The 4 Division Winners will make the playoffs. The next 2 highest ranked teams of the non-Division Winners will also make the playoffs. The top 2 teams will get byes in the first round (week 14). The remaining Division Winners will get the 3 and the 4 seeds and face the two Wild Card teams (seed 3 plays seed 6 and seed 4 plays seed 5).</p>

    <h3 bind:this={nineThree}>9.3 Tie-Breakers</h3>
    <p>The tie-breakers for seedings are as follows:</p>
    <ul>
        <li>Record</li>
        <li>H2H Record</li>
        <li>Divisional Record (if teams are in the same division)</li>
        <li>Points For</li>
    </ul>
    <p>In case of a 3 or more team tie, the same tiebreakers will be used, but the head to head record will consist of games against all teams involved in the tie.</p>

    <h3 bind:this={nineFour}>9.4 Playoff Format</h3>
    <p>Teams will be re-seeded for the semifinals, meaning the #1 seed plays the lowest remaining seed. Each playoff matchup will be 1 week long and the home (higher ranked) team will have a 3 point home field advantage. If the matchup ends in a tie, the higher seed advances.</p>



    <h2 class="sectionHeading" bind:this={ten}>Article 10 - Trades</h2>
    
    <h3 bind:this={tenOne}>10.1 Trade Deadline</h3>
    <p>In-season trades will be allowed through 12PM EST on the Thursday of Week 10. Trades will be allowed again following the conclusion of the season.</p>
    
    <h3 bind:this={tenTwo}>10.2 Tradeable Assets</h3>
    <p>Trades can only consist of players and picks. Any trade involving any real-life incentives will be rejected.</p>



    <h2 class="sectionHeading" bind:this={eleven}>Article 11 - WaiverWire</h2>
    
    <h3 bind:this={elevenOne}>11.1 Waiver Type</h3>
    <p>The League will use a Free Agent Auction Bidding waiver type. Each team will be granted $100 FAAB at the beginning of the season to use on waivers. Minimum bid is $0 FAAB.</p>
    
    <h3 bind:this={elevenTwo}>11.2 Waiver Schedule</h3>
    <p>Trades can only consist of players and picks. Any trade involving any real-life incentives will be rejected.</p>
    <ul>
        <li>Monday - Free Agents</li>
        <li>Tuesday - Locked</li>
        <li>Wednesday - Locked</li>
        <li>Thursday - Waivers (Processing Time 11 AM EST)</li>
        <li>Friday - Waivers (Processing Time 11 AM EST)</li>
        <li>Saturday - Waivers (Processing Time 11 AM EST)</li>
        <li>Sunday - Free Agents</li>
    </ul>

    <h3 bind:this={elevenThree}>11.3 Waiver Time</h3>
    <p>Players stay on the waivers for 1 day.</p>



    <h2 class="sectionHeading" bind:this={twelve}>Article 12 - Scoring</h2>
    
    <h3 bind:this={twelveOne}>12.1 Scoring</h3>
    <p>The scoring settings can be found on <a href="https://sleeper.com/leagues/918205115247595520/matchup">Sleeper</a>.</p>

</div>
