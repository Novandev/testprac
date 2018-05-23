import requests
import sys

class Webscraper():
    """Webscraper class i will be using to analyze text"""

    def __init__(self,url):
        self.url= requests.get(url)




    # # set the url to the site were going to scrape
    # url = "http://tardis.wikia.com/wiki/Doctor_Who_Wiki"
    # # set the content to url libs opening it
    # content = urllib2.urlopen(url).read()
    # # Declare a beuatiful soup object with the url opener object
    # soup = BeautifulSoup(content)

if __name__ == '__main__':
    test = Webscraper(sys.argv[1])
    print(test.url)
