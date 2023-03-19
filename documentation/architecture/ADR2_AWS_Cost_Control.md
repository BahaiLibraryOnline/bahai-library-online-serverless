# ADR 2: AWS Cost Control

# Context
AWS is a hugely complex ecosystem and it's easy for cost estimates to miss something or unintended consequences sudden changes in consumption patterns (e.g. a DDOS attack) to have sudden and unexpected costs

# Decision
Incorporate a system of cost controls and failovers, relying on legacy BLO as a backstop until November at least
- Set AWS Budget
- Set Budget alerts for 85%, 100% of budget consumption and forecasted 100% budget consumption
- Set up Cost Anomaly alerts for suddent spikes on a per service level
- Set a hard limit on AWS expense, and if hit, suspend AWS service and switch over to legacy backstop
- Monitor and adjust over time to have confidence when the failover legacy app is withdrawn.

# Status
Accepted

# Consequences
1. Cost anomaly tells us when one service has gone over $1 unexpectedly
2. Budget report tells us when we're on track to exceed $5 a month
3. If it goes over $10 because of a weird sudden spike it switches everything to legacy BLO
4. If the failover switch were to fail, we are prepared to let costs climb up to $50 so BLO doesn't break, and call a P1 to fix it ASAP, or manually switch it to legacy app.
5. If all redundancies fail and no fixes are immediately put in place, past the hard $50 limit the service fails, and we can be certain we won't pay above that.

