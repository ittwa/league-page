<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneTwo, oneThree, oneFour;
    let two, twoOne, twoTwo, twoThree, twoFour;
    let three, threeOne, threeTwo, threeThree;
    let four, fourOne, fourTwo, fourThree;
    let five, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive, fiveSix, fiveSeven, fiveEight, fiveNine;
    let six, sixOne, sixTwo, sixThree, sixFour, sixSix;
    let seven, sevenOne, sevenTwo, sevenThree;
    let eight, eightOne, eightTwo, eightThree;
    let nine, nineOne, nineTwo, nineThree, nineFour;
    let ten, tenOne, tenTwo;
    let eleven, elevenOne, elevenTwo, elevenThree;
    let twelve, twleveOne;

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


    <h2 class="sectionHeading" bind:this={one}>Article 1 Membership</h2>

    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 League Size</h3>
    
    <p>The composition of membership for the League shall be twelve (12) Owners.</p>


    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Annual Dues</h3>
    
    <p>The current annual cost of ownership is $150.</p>
    
    
    <h3 bind:this={oneThree}>1.3 Payment Schedule</h3>
    
    <p>Payment of the membership fee must be turned in to the Commish (cash or Venmo) by the date of the Free Agent Auction.</p>


    <h3 bind:this={oneFour}>1.4 League Platform</h3>
    
    <p>The League will use <a href="https://sleeper.com/leagues/918205115247595520/matchup">Sleeper</a> as the platform.</p>


    
    <h2 class="sectionHeading" bind:this={two}>Article 2 Ownership</h2>
    
    <h3 bind:this={twoOne}>2.1 Ownership of Team</h3>
    <p>Ownership of a membership lies in the hands of the League.  A member may not sell his rights of Ownership to anyone.  If a member wishes to leave the League, he shall report his decision to the Commissioner who will in-turn alert the other members of the League and begin to contact individuals on the League’s Waiting List in search of a replacement.</p>

    <h3 bind:this={twoTwo}>2.2 Waiting List</h3>
    <p>The New Owner will be selected from the <a href="https://docs.google.com/spreadsheets/d/17kspYjtSNtiBuUxbdWYkHbP8Y5K7qs0nJ-D1VA-Wpwo/edit?pli=1#gid=372338541">Waiting List</a> in the order by which they joined. The potential New Owner who has been on the Waiting List the longest will have the first shot to be voted in by the current Owners.</p>
    
    <h3 bind:this={twoThree}>2.3 New Owners</h3>
    <p>New Owners must be voted in by the rest of the League (majority vote) in order to avoid douchebags and uncommitted owners.  The new member must have a Sponsor that recommends them to the League.</p>

    <h3 bind:this={twoFour}>2.4 Co-Ownership</h3>
    <p>Teams may be co-owned.</p>

    
    <h2 class="sectionHeading" bind:this={three}>Article 3 Governance</h2>

    <h3 bind:this={threeOne}>3.1 Code of Conduct</h3>
    <p>All active members of the League are expected to conduct themselves in a manner consistent with that of a Gentleman.  This code of ethics includes, but is not limited to: only ripping fellow Owners as much as they can handle; being respectful of and sensitive to Liam’s (mental, phyiscal, and mental) disabilities; not dropping players out of anger, frustration, or resentment (or some stupid, personal NFL boycott or other such nonsense); not partaking in collusion of any sort.</p>

    <h3 bind:this={threeTwo}>3.2 Voting</h3>
    <p>This League is run as a democracy. All matters of significance will be determined by a vote. If it is a vote on a proposed new rule, that rule will pass with a majority (>50%) vote. If it is a vote to overturn an existing rule then a ⅔ quorum is needed to pass the vote. Each team receives a single vote. If a team is co-owned, only one vote from that co-ownership will be counted.
</p>

    <h3 bind:this={threeThree}>3.3 Removal Procedures</h3>
    <p>If there are grounds (complaints from several Owners, inactivity, lack of communication, repeated violations to the Code of Conduct, etc.) to remove an Owner from the League the Commish will first discuss the potential removal with the Owner. If the Commish deems there is a reasonable case for removal of the Owner, the Commish and the Owner will present the case to the rest of the League. If a solution cannot be reached without a vote, a vote for removal will be had. A ⅔ quorum is needed to pass the vote to remove the Owner from the League.</p>



    <h2 class="sectionHeading" bind:this={four}>Article 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15. Each team that wins their division and the 4 wild card teams that finish with the best records, will receive a playoff berth. The 2 teams that win their division will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Division Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Article 5 Tanking Policy</h2>
    
    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty. Any evidence of intentionally leaving roster spots empty in order to improve your draft position may be subject to punishment, including but not limited to the forfeiture of draft selections.</p>

    <h2 class="sectionHeading" bind:this={six}>Article 6 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league chat, trade offers, and the waiver wire, is strongly encouraged but generally grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commisiooners will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>
    
    <h3 bind:this={sixThree}>6.3 Replacement Incentive</h3>
    <p>In the event that a manager chooses to quit the league or is removed by a comissioner, an incoming manager is offered a 50% reductioon on their first year buy-in.</p>

    <h2 class="sectionHeading" bind:this={seven}>Article 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through <a href="https://www.leaguesafe.com/league/3949641">LeagueSafe</a> and collection will be sent out no later than the first of August. All managers must be fully paid up before the start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be addd to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 8}$</li>
        <li>2nd place: {dues * 3}$</li>
        <li>3rd place: {dues}$</li>
    </ul>
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the winner's payout. Similarly, if new managers come into the league and the payout is smaller, the difference will come out of the winner's prize.</p>
    
    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost is reccomended.</p>

</div>
