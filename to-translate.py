import random
from random import randint

adjectives = [["abandoned", 3], ["advanced", 2], ["blank", 1], ["blue", 1], ["devillishly", 4], ["cloudy", 2], ["sad", 1], ["meatier", 3], ["cooler", 2], ["interesting", 3], ["identical", 4], ["ill", 1], ["right", 1], ["wrong", 1], ["fun", 1]]

adverbs = [["Financially", 4], ["Willfully", 4], ["Firmly", 2], ["immensely", 3], ["truthfully", 3], ["Quickly", 2], ["Wearily", 3], ["best", 1]]

verbs = [["has", 1], ["is", 1], ["celebrating", 4], ["congratulates", 4], ["minimizes", 4], ["sandwiches", 3], ["vocalize", 3], ["murdering", 3], ["was", 1], ["had", 1], ["got", 1], ["made", 1], ["said", 1], ["took", 1], ["jumping", 2], ["crying", 2], ["hugging", 2]]

nouns = [["dog", 1], ["denim jeans", 3], ["minimal wart", 4], ["slippery pupper", 4], ["pseudo-hug", 2], ["purple squid", 3], ["saddest shrimp", 3], ["apple", 2], ["squad", 1], ["granola", 3], ["pumpkin pie", 3], ["pineapple", 3], ["community", 4], ["magic", 2], ["noodles", 2], ["morgage", 2], ["dad", 2], ["fishies", 2], ["eel", 1]]

prepositions = [["the", 1], ["a", 1], ["that", 1], ["this", 1], ["his", 1], ["her", 1]]

questions = [["Who", 1], ["What", 1], ["When", 1], ["Where", 1], ["Why", 1]]

pronouns = [["I", 1], ["You", 1], ["He", 1], ["She", 1], ["It", 1], ["They", 1]]

def haiku1():
	#initialize all vars
	n1 = a1 = n2 = p2 = a2 = v2 = None

	#generate the first line, syll count of 5
	syll1 = 5
	n1 = nouns[random.randint(0, len(nouns)-1)]
	#decrement syll count
	syll1 -= n1[1]

	for i in adjectives:
		if i[1] == syll1:
			a1 = i
			break
	print(a1[0], n1[0])

	#generate the second line
	syll2 = 7
	for i in nouns:
		if i[0] != n1:
			n2 = i
			break
	#decrement syll count
	syll2 -= n2[1]

	p2 = prepositions[random.randint(0, len(prepositions)-1)]
	syll2 -= p2[1]

	for i in adjectives:
		if i[1] == syll2-2 and i[0] != a1[0]:
			a2 = i
			break
	syll2 -= a2[1]

	for i in verbs:
		if i[1] == syll2:
			v2 = i
			break
	print(p2[0], a2[0], n2[0], v2[0])

	syll3 = 5
	ad3 = adverbs[random.randint(0, len(adverbs)-1)]
	syll3-=ad3[1]

	for i in verbs:
		if i[1] == syll3 and i[0] != v2[0]:
			v3 = i
			break

	print(v3[0], ad3[0])

def haiku3():
	#initialize vars
	n1 = v1 = ad1 = n2 = v2 = n3 = q1 = n4 = None
	syll1 = 5
	syll2 = 7
	syll3 = 5

	#generate first line
	n1 = nouns[random.randint(0, len(nouns)-1)]
	syll1 -= n1[1]

	for i in verbs:
		if i[1] < syll1:
			v1 = i
			break	
	syll1 -= v1[1]

	for i in adverbs:
		if i[1] == syll1:
			ad1 = i
			break

	#print first line
	print(n1[0],v1[0],ad1[0])

	#generate second line
	for i in nouns:
		if i != n1:
			n2 = i
			break
	#decrement syll count
	syll2 -= n2[1]
	syll2 -= 2

	for i in nouns:
		if i != n1 and i != n2 and i[1] == syll2:
			n3 = i
			break

	#print line 2
	print("or", n2[0], "is the", n3[0])

	#generate line 3
	q1 = questions[random.randint(0, len(questions)-1)]
	syll3 -= q1[1]
	syll3 -= 1

	for i in nouns:
		if i != n1 and i != n2 and i != n4 and i[1] == syll3 :
			n4 = i
			break
	
	print(q1[0], "is", n4[0], "?")




haiku1()

print("")

haiku3()