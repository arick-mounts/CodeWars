def count_skills(tree, required):
    if required == set():
        return 0
    requiredSkills = set()
    for skill in required:
        traverseSkill(tree, skill, requiredSkills)
    return len(requiredSkills)
    
    
def traverseSkill (tree, skill, requiredSkills):
    while skill != 0 :
        if (skill in requiredSkills):
            return
        requiredSkills.add(skill)
        skill = tree[skill]
    requiredSkills.add(skill)