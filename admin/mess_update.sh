#!/bin/sh
# Just the link to update the location to the google sheet that has to be applied as tsv
link_to_messMenu="https://docs.google.com/spreadsheets/d/1w2c39MHBlt_4jkPfSprAsQp57jtShcZXwq8uYTqM8uA/edit?usp=sharing"
link_update="${link_to_messMenu%/*}/export?gid=0&format=tsv"
echo $link_update
curl "$link_update" > ../mess/mess.tsv
# cp ./mess.tsv ../ 