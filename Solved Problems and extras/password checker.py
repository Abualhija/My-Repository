def PassCheck():
    while(1):
        while(1):
            passWord=input("\nPassword : ")
            print("\n")
            if len(passWord)<8 :
                print("\nYour password is too short , it should be 8 charachters or more ,\nplease re-enter appropriate one. ")
                continue
            else:
                break
        up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        low=up.lower()
        num="0123456789"
        symb="(){}[],.:;\/*-+.!@#$%^&*_=|<>~"
        x=0
        y=0
        z=0
        b=0
        for i in range(len(passWord)):
            if passWord[i] in up :
                x =1             
            if passWord[i] in low :
                y =1
            if passWord[i] in num :
                z =1
            if passWord[i] in symb :
                b =1
        if (x+y+z+b) == 4:
            print("\nYour pasword  contains all the requirements .")
            return passWord
            
        else :
            if(x!=1):
                print("Your password doesn't contain capital letters.")
                
            if(y!=1):
                print("Your password doesn't contain small letters .")
                
            if(z!=1):
                print("Your password doesn't contain numbers .")
                
            if(b!=1):
                print("Your password doesn't contain symboles .")
            print("\nPlease re-enter an appropriate password .")
            continue          

print("\nEnter the new Employee's passWord :\n\nPS:Password should be more than 8 chracters ,")
print("and contains : Capital Letters , Small Letters , Numbers and Characters .")

print(PassCheck())
# Right Password : Aa123456789*