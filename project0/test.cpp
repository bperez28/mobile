#include <iostream>
#include <string>
using namespace std;
void search_replace(string &x, string s,string r){

    int j=0;
    int l =x.length() + r.length();
    bool found = false;
    string copy(l,' ');
    for(int i =0 ; i<x.length(); i++){
        if(x.at(i)==s.at(0)){
            if(x.substr(i,s.length())==s){
                for(int w = 0; w<r.length();w++){
                    copy.at(j)=r.at(w);
                    j++;
                }
                found = true;
                i= i+ s.length()-1;
            }
        }
        if(!found){
            
            copy.at(j)=x.at(i);
            j++;    
        }
        found = false;
            
  
    }
    x= copy;

}
int main(){
    string x = "seredipity";
    string s = "pity";
    string r = "ity";
    cout<<endl<<x<<endl;
    cout<<endl<<s<<endl;
    cout<<endl<<r<<endl;
    search_replace(x,s,r);
    cout<<endl<<x<<endl;

}