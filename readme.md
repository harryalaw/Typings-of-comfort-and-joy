### Advent of Code solutions using the typescript type system

Inspired by the [HOTScript](https://github.com/gvergnaud/hotscript) project and armed with knowledge from going through https://type-level-typescript.com/ as well as attempting some
of the [type-challenges](https://github.com/type-challenges/type-challenges) I wanted to see if I could use TypeScript types to solve advent of code problems.

Many of the algorithms I've implemented for the numbers have been from me trying to figure out how to do it and using HOTScript as a reference implementation when I couldn't figure
out the algorithm fully.

I've not managed to get very far in a given year mostly since the key problem is handling the recursion limits!

### Playgrounds with my solutions

- 2023]
  - [Day 1](https://www.typescriptlang.org/play?#code/C4TwDgpgBAyg9gGwG4QIxQLxQAoEMBOwqAPAJIB2YArsAHwBQUTUA9CwHoD89bOBwAJigATOBADO5AOTAoAdzj4A1lACW5KMAAWq8VHHqA5gmgAzVSahJVEOVFOLNWs1QQI1lGvcfi4AW2h8CFxfcgAaJ2gAYzhhaHVIqAAlCDA4ETE9MHxYqijobWgIAA9IKOAIYSgg8VdgelBIWEQUISw8QgEyTzpGZjYueh4WPnEKqApqWWcghvBoSa8sAANUXAAjKIF6MABHfABmMaoADiQ5YvpcVHWBKIPhABYIAFZTBqD1gHY852BloYlNKETTzPiEEgAFVomGayAgHSIxGhUBKFXIwj0AG11KYIPgoJC4MBcO40RAMXpyFQ-Ot8RFcfjkhA-Lh1EYALp9JicKAAQWEwmRxNJEXg8MRJBSrPZ5EMtAYzCgAC44ShJciGHMmuL1fwSAAZdQSCJEklk4rozFQam0plYAAMEQAIqltKjLRTrba6QTHREALK4YqusDurAATijMIw3Kgofd5MpUCDIbdWigvKxZtFUCN5AkHJVcYAcmj8xBiBXxDCk9aceQ8QSKwzG0yUmMuUrebqEfriB3gBEBUKAOIQYAlmm+8SG420U0ihAL-mC4gJrQRVAKuOqkfEceT6f42dV401xfmrWNaBly0VzWwyEeq16ZYAEgA3oyCQAxVT4GMAC+AA65Bfj+zLAQC3ZQFi-6AUOUHAF2zCqtmHIANyAqUiiyDeUCHlOdqASQcYtnGABqpJUBIL5enon72ABYzoT69LxqohiqChEQICEwBsce+AulxPFFkBsJMeYiHoagDpOlADocnxAnoYpylQEBYRxhu9HJuxfpKfQMZ5sa+nWh+35tn+LHAEBEE2chQEwUqzC8ghYwWW+jlNlAJbeZx3H2a5bluVmo5BLgFT4JCWi4OQxDUQgtHiFiABEMljOlHJYspLrpiukXBDFcUJUlNESBl-HZbl+XxoVRZ1nokEdnUcZhWFvJtQgsjNXBwD4LRESDbRRa8kRwmnoOEQAML+FMEAwKofhgCYxAAPJ+DxFUpSaUCZXZ6UwgAZFA0l2ehG4RCWElQAAPjaEAoPgK77tdUDboqnU-aqPV9Z6yZYqNEARKYpLiBA42EROxEzlKEhIRdslwR9t2qaxqPpjdEnDmuH1fR1P1oVBdSBVi4MIJDI1DVDmYw0eJHTYjETJaleNCgTO7E51f0SGT-UUxDoP2ML0OTUzCNjHNC00EtK1rZWW07Wz+3pTVwDHVAZ1MRrV3Y-5ElvfjBuEzzYWqgWL1ExbT3W79DNwyeUtIar4gc+upvcyTzpicA4hEk7+DEFibsZVlmu5agKlQGH6sCTlWLRxyWpAnhoJNIiXQolgvZZ4+guQTmFqvjawmtn50psuQnJxry+7F2KLR9p0A4stXRje0wqp5-w2fXmCvet+R546UqxeBYZsJOrp6aT8J09j8wqZ6VgJwKSZsJ6f1K9z1mjdmQW4iobbd7AA+1a1oD9aQS2HiV4jJ-Ez2zf5zNq5jrDU1dBWK7F8bnMvbfR5nuNcEsZw-3PH-JcqdcIggIuAk8XQR4FiXkwN2gVkaYyxIZUSwUY56zgrgoK4ktJSWYijJOCkIj1UIXlGhuNZ5hgzP1Ke-pN5YDPkHM8BYr6lwbH5AK-VfbBQru2R+Nt6ZCOvnoB09MRE8QDnAbhodKppUOohRO0dWZqOqgnKOHIU6SPQsVaK+IyqJTjhHRO9UNxFSiqVeKljdHx1qnlGOdimoyPvuI2ovVJGwX+uTEGNMxr00QYBLo795qrTlstVa61lbAF2uzA61jTrnQodgtGd1HpW3xAAz2zCtxd2JnzPxAN+EhNFlTOmE0v5MyiSzTJEd9bFMNhjQSWN2m3S0h7LmwCymk16uTSm1NNC03Fg0iBbdpaxzUf0oBASSZBMFmMkW6ypmMxmdE2WFR4mK02ttZJbsIiuM1hk3WalunaBxlpQpAzlndztviYxLz8C7hIf7QOwkQ5WKOgYnRe11Eay0YYrU2pbxom4TnQkgUrKQWkaXBR9lfK+JCvTLEJYIiDifqqZ8-VlhwALGigkg4XKYtQBEZYEAvzkuWHiuFhLgAKFJc5ZYmKBDUrgHSxGLlGUEu8csbQQRaXWQftBTFBxqVivpQK+FDgqD4DZfSzFjxqXKs-HKz5grS7LHMCgFVfKOVZheDK3l0F5WEoMMUI1kqswADZqW2q1caq1QrIYoHAuK9FFKsxfGpd67VSp8XwogFxLQwA7UYqzCcalUbXWWp1fCmuJKfVkuNZiiM5rE0hXdXqtlAB9TyqL03sqkdC35g5BnqTOTlIYDa2AjAAEIQAQHAOwBACjOCgM4BAkACSmCoOQcoqhiV6G0NFKAJhZAgDgFQDIiRWTaHEEMXgQde1toHautO8CwQoq3n7IMYAsRKAgHO0wXzj1YXoLu-C+6-YwEGkYWEZ6L1XtwGAbCd6M7QBRceqSfR0oOnSqqB02EmDpVQKBz6EGDoCBgwIOD6UDgwYOMhx4MHHjIZeDBl4yGHUwYdchr4MGvjIZODBk4yGIwwYjNhIC2Fb1wPvU0IORIUXiGIEihiZcSKmSffgIwHG-ZcasiWFytAmM-oIoJ4TcBOPED6IJwKYwhNyiXrq3jKKsRFiwLpnSAnBrwrZcUQKKK5NygcmW+lfQezPrlCJ4KXH35YgAHQechHgnix6sTFHBX0fFTH10QEqJodIanVBgGncEYQL6ABe+I4A7pY7+r5SjLOGCU0wLTyYdMqWU8Z-qkW5SwnSulQzT5yaQQABKxYiB5tzrUJE8mQuZv2um65QDq7gKowi-ZE15JxokmXZlISsoJ6zPXhCSaJpbZ6ryQ3vMC7AQa0nUsEWG8o35uXrT5dMh0SGFBkl9C26NyEQm-AAC0ktcehAwKTOFgSsegIdiAx3HxYF2z5MtPGDLCT9f5FU7z1vPbSxdlaN2ch3fa8FXTplvtwWUnZpHqFQ2C0Uo15rXl+tw8MSjiH13btje+kFxtIwYlgAILocdPAABUdPGB0-5PgfAuAQBQDgJepAaj9C-CcFOlFlPqehF83yXKzauzM90MqJnTA5GqEvXyTAWBm1j2Z59NQSuoDECgGruXABadAiv+RQBhM2pnLBIVfOF0J0Xn7YRYj6PQz6W43eu491Sz3W4CtMCxEbmh7uvfB6D0H33cEA9QEj4pEP3u4-aOd5HpPXuY+h-j+H-3Xvk8RGj2n2PCe-fZ6j1nkvgf48+6XpnnPpfi-V7r0pPPGei-N5r7nz3TfW+d-r0XmPHfu9d9r4PnvBWb308Z1AZntu6JxcMP7QkEQACqcvmTACVeQPQxvL3PhhEvifTAUir-wOvpSWu4UYCwLvjXB+196CN6f58uvL9W4IlPxTiOUWL9hzxUyQuFoi+Jb5gvrlJCKPiwAznLvNOQC9HPrgHxr6OFlALASVoYJbtbiNg5llgvvPCRA9FAOsGJOQHQLCFZAvi5MFuAXvqOKoF6poAoPoBgXoDAF7jAEIDEKtF2hOj2iYHKCupzpeoULQXAMvtfkfnoJribkwW5twbPhmDCCwVIRSDIaunvivjfvLqfpIdIeGLnAIAoTwVoMoVfhOGoXfhIagHoTITrrALoVoQYUzqgS-n-kEAaIodoNlrAOgMVhgUvCwapt4Rwh4SZmWoWtZq1KgC5Cjr4YSkWqEU5EkAIBEbBFPi4foQOF7vETWp9CtlEUKjETEa5LyEbituBmuhQRrlQTQSyhFgwXwXASePIDxBmAIeILgAEPoKoIlhEGwVTjUEurgIYDXKvnEG5sIRAFEEqgYCgAgBzmiGzuUJwWYHZCIKJogRiFAN0RwZEJDCMSoaQPwc4Bzl2qiLsFQKSJEBoDxOsU4XRAITULIFzokMgeIDsRrhtIUPgHILoIEMYaIYkDUGTA8QIRsXbsSi8aMYfsfgrpek8YgUEKiKtKAFAAABTaC6BqB6BUCQxVAhB4EhDRB4neAEjAlGDL4QAnFnFPEOFghT4wCtEQApEyHuFMF+HqaGA+FCBeGsmVa5yeG5FlrOi8nIqPoYGxGVzhEFHWFBGQTOgcneIWYikqoJGhT0yv6ibrhHqfpYgCkeIaknoykpyBTY7tRdTDKVK8YOiSK8g0l0kMluFJDpECCDJLb-RzbLZLYWnPIlFj5y51b9pMjADpBRCkjuDqABmc7vFXHsEgkaABDaCxCGHP5gimKOIJS+kDrEDK6sLlx67YG+imTJGuFaDuHoGskZkLh9AllGDEDNoPaGlxH8z+KtarLeIenuRQDWkBC2lFmVlyhlmLijY1mZEunPL5L4Cg7pwIIOLmJOIZm5kcTNpzmvSwjJnTmplbr4juF8hLwW58K8aoAo4gwrbrLjl7pNCpizlZkkQRALmXl5nLlTmxQzl9Bbl9A7mBSHmtZ8grbNpMbDAfw8RjrkDMZg6bZ+wjiQgbCWD6bO5xgu5e5cpQDSpQDqpQBmpQBOpQABpQBxpQARjh5+7wURBIUoVoUYVYU4XZpKT4VwQIXEURCkURDkURCUW95oJwR0WoURBkURAUVl7wXUVYgkVcWMU8XMV8URC0UCUMWYWiW4XiVQC0URCPACXcXYViUN4e6KXIX0UCVMVyUaWEWIVKX0VcUCW8UGUSVEXGWcXoWMUCUsXu5aVCW2UyXYXh4Z6wWGUcXSV6UsUCVOUmUuW+V8UCXeXCWuXmWp4KUCXOWqWRWOVEVSXhXBUWUKVWXIUqUiVqX6VRUBWoW6WyUOWaXpWxVmXqW5UlWBVkX2XyV5U+U8UCUVVGXaU2VxXMXuU6Sj6gXBSzQED4AgAQXrBQVwQwVKgu4aRl4TUaVTX5SwUzWTULXTUV5zWLXzVLXt5sXjWrWLX56NXbXrX57LVjVrVTWHUbUrXrVRVnXB57UHV56N6bWnX3Xl6fS3XXXPU3VLweXHX7UnUhWPW-X7WfUXV-V3XnU-WXU7UPUg1A0fW3VrXvXg3MBbWpWI3A0Q1XUfVh4A0vVo1HXI1424340j4nkvYfzcaCm8bEIliymlyGSmQjiKZ9DsYKZqkljbhLws2KY021n9RGmNn0zNlCl45dZbbcL-SZGjkrajlMYESM1ql9AAAaX+wABmfQAAmirWrUwL1azjMS2bgegOwkwHyFEFEFrXpnBAVqZMrYLFjk5IrZTXlh1jHJBIrRoLjuJCjprXbR5pBOrU7Xti7WIgSOrR7XKX7E-PXIKEzT9I7WxUqAHQncwELn1QNZBRAFiLrf1blO7blGHdRWNSiuBRnVnWnbneQPnZXQ1h5qbVEE-EwJkfLc5sQIrREGXXrTHIpHXaTlAD7d4lqX7DXW5vlqhNHcIIpure3dnSAF3cOGbb3TPYFPua1knMPXXWjvyGbb+bwAAKLkkIA8QgDW6U5xIKzrSwqfiwUADSHgUAb6DxIB+KWI19XIQEQAA) -  Part 2 doesn't work in playground but the repo will produce the right answer
  - [Day 2](https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvLAhgJ2HAPASQHZgCuwAfAFBSVQD01AegPxmiSwBMSqGbuBx5VGvSZkytcVAAq4aCAD2hNFACWfYFAAWENBABczGVHxF1yAAYBxFAFtocXVADMUAEYAbQhAA0UACxQdABMAbigEIJ8OAHMdCDwfADZXDwhQ6Ni8MitbKDYHBHdPSKgYiDjQ51K4n39C7zCAiBCGqviGuqybaEcHAA4SjMTkotyABkbmgFZh+v8IsMqM0OnWn3CmzpzffIGytud5pLqK3eqoJKCT1bDpurW5jezoSYcLprWZn0W9tM+G+fSezMolEtCgAAkIG5IGgAM5QABmciUsLkbgAbqoolBgFooGB0MB4XIETi8WA0HJ3BBrGQIAAPMDI9QsaAwQnYSQkTgAZTR6Ig7IwnPIBlYfIxgo5WEkPgAwgo8OoGcA4oF4XhCNYXNpOKNuYgKFRJFAVWr4WYACQAb1UCN1ABlVBAAL4AHTwNrtuoAShBYcAXcDBAwoBKBULMFg-QGfABBQKBLAKwhKnw4WEANRQbmUSadeAgJGLRsoDgTSZTaaMWZzeZlJbpjOZOMMGezuaTXM4QthEALEAbpvpqrw6qgAG1vUocIFh6Px5rtdofNOoABZOQBgBCKXn5qgS51aFXeHtSk3AYsGX3Y41WuPp-PG63wD9c7Nd8PD+0AF1S1AobXhAKCqmgkgaCgeBYJewC7iMcC+Nyn7jsAaCeIBUCjABDjAaB2gQVBMGvsBZxwI4yEjgeaEYaG2GCLhOj4eBkHQbB75rGwlELvCNHQHROFGIEgmFgKaCiAyTIYK2rCRjw3bIOGUrcA2oismG-LKcA8nyoqypUV+R66sg+pIABJooRaXpno6zrup6to2UoMaBsGVChkpcnRv6wDxomyZ6T4MByAA7toWADsWAhUOW-lVr5sCheFXKipJLbqcFYVoEOyC9v2zpDpZk5rgA+nmT66vB0BFUZJ4qE5UCkXgt6Lj+dVru+LX3suaD-iGG6EG4wDKGAbggFgVU+E13EHh1-qDfpPHfj1AGhuuC0jWN3mwgtPjvtFZaHhAYkicd2hqYYsHxfCyATrVPj3ctj5PX+F2yegfazjlUhdVAlhdFA1nPrOv21S6DhA76PlBqtk6zntPl9TFR0nWKbIfflhbfXlX3dkVU4NSDNVtRVzmI7DeUDvgYF4Dm20JRO8NYT4ows7+B1QA4onnWjXB9lTSraLTbgyvKihoE8v1XXpsIGuZv1Wo5z7xaDbUun8kNkwGMP9ZTzrU0LdMuT4E5yuLTwTqMv4+OuKD0gFqYJWbaAS10E5wOzYsuxbbDW1Azuu7YE6OL+7OCRZBnjora4q8TPXq8cgNK1D2tuZQoZ64WBtoML9MmwHFtWzbdsO9WBdux7JBe4HEATr71cWyHYcMT9RXRw1seR91x4JykaeYab5tu0XG4l-FDcV57-tD0H9fT97btN+HCua-7emq-HpxtKvLk6+5fOYxA2e58bk7l0HI-n7XHvF-b4-zzXddT1fwehxzDgR0t7fK+vcc91voQd7Q37hnDGAsaZGx8vnGetdL4wPdn7W2d9AoPx9s-eBTd36ty7n9Venclpgy3iAs+8C4ELyDjfUeyDHYT1nug8htcl4t0-geb+up8EHkIfMIBqcKZgP1oLHOkDYwkIYZbP2L9KEvznkg0uTsMHs2bsjFhX42FKA4YZNWExAHJy1q5PhcJD7H2EQzF+ZDH5SPgTIseKCX4hxIEow6Kio54N-jgrhTRiGDzEeYi2lixHWOoWXBRDjBJXxBBIbcUJQpQHQNAXE0AtDQl1AiVMABjYacg8C8UguoNwEB1DyEIFAQIcgyTQGsKBDQsJQTUCgAAOTapoKEMIalpWkupAAIsoKIyhTBQG6b04AtswATgANYQHkKSQZfSRm-mCE2KSLJDAzOADyNCWJOATKmQMnpsyUBgAWe05ZrBVkjM4NaI0AAiUYVyHCjAWZQK5cA7lhEeVAK5bBXlsHeVcxwrzHC-N8K83wvzJivMmL8hIryEi-IAOyvLhb83orzei-IAJyvPRQsl0CzFnpUMI0nqkg5CrNhFgepG9jwGjDBsvAUQSVkqwIrepQYSB4uOTJaA6y0BYkZXsokWAjQ8t+gGXl9KvBGmcfCVZE5fycDlZKmlIq26r3pL9VZPKsQuh4fo9OtLxUMtJQK8lp8JwADpLWyl2UMkZE56RvyNB-PFYJ6llDnMAMpYqRpQHySgQImyABe2gtz4o6Ssk1JKtX0qFZQaVNq+mKuFWhUVdLsTICuVcpVnB40E2fJCf1PhLXmrmgGJGoYXIaoFXK2GBaPw4NWQBfVZKo1przrg60PKdXWjrWyptnMUbnRbtzcSh0eUcubOG05ka5BEuPDKKtQy5U0pxkqWNCaiStsNTKXl1gABaIbyUpTIOyiSk6Tno0MdTb68a1ENKpdoIMmFKVczOmgCdSyuVSF3QeykR7F2JvZjm364ijShlA04kDrMoDFtLYtA8srQ5ge-cofdh76bRWdREupCprAEl5aibJYgABUxGKDEagHGF2KAQBQBJFAdEOZPDwh2mkjQZJQIbtw-h5QhG7Vxl-BObcfUKO8f0FACjWEVCkjjEgZA25JUScoAgZQMmoBYCgAp8jUAAC0Km1Pcm3OR6gvNVncfQLxrJ5zbpGktmsezYQHNwCc0562tm9Msxc457zzmfNrDc5QCcHndO+eg758LXnwsBcnMF2LoXIuRei0F3zcWfDBbCwlsISXUshbSyl+LfmfPZfy3l0ruXysZaK4pmLJXys5Zy5Vm+7nav1Za7VsLxWyuta621tmkr5mglI9p8zOh4QBqiESKQPgACq2moB+mAIobJDRVM-W5LNpT82ClLfhOMVbJpEDIA25JhbO2QvSZ+hp47Jn1IjYgEy+NqyZsAdIJwMzcg8MWb4wcic03BOSAGyRsjSmFR4DEpNlAL0lCetiVAb19LjO8y3ViLA02H1KAAD6uD2UqGlitptBhdUNpTFhlACmasAEKXq03wh5L5nkHA0kffw-6cpvq4gTeqXR0kCScRU7m6dnO8IVukjp+a-J9LcRQG5Az8XHPcQ1M24L5bUnVti4l5zuTYY2By8l9UgX22hfnbV3AXXmuNOy41wr8jiPbvM7iQ6eXGh1109TYa6rDO3dYmzYpBAqrdFQBKt2jqcA94eQ4P70qweGo+jYHvfVd3Hd6+jL52PWC4BOu1yvAPQfV5B7cqGPTmeHmDeB5J0n5O+fU8NcSUktV4QhT6ex3nsIAawmUMGnwTPPujbZ5UqIeA+mEECBAc1Bu0mKHbwKMa840AoAyTk6ACJlBwnUONvp8IoJzm7yzxffYx+bZwDzrQtG4mmgAI6EBzOU5qfSoA77iYvxoAZuds-h1EWEB-JMAHkEloEb32I0ItkbrzqNgtK-rzg-gRlkl-gbsActntqSO-pvjoKaHhqAFAAABS4i8YqDwiEB9hzgoDwguDEHQBpJkGIjIj3726GpzYQCX7X7IG26GB3Y8hdBJ6c4u5+44Lv4e4R68Fpo+5hg8FfyrydKiEIYCrRpRDR7Pg+ih4F5Z6R4NSdICFLSapppyG+hx7EJ3ZMpnI-YSF+yGGjJqFAZFSloLT9oVrzRDS-T0SCD7xsEcFO4p57RcT9qHQxjWFOEDojqCSOH3JE5l4QgtK6gw4UFuBuD1Qw5yB-40E96WbNS2C4hyDqgsGsB4RgSER4CQjJLZSyZ-wriabo40qJ5uFSpyAyFYBxhVxVE1HbjkAzRfhWFDTIY+H2FFSOEJ60EQDsG2CcG4gyjVFtp1E+DI4xpNFYKdHACZ4jofoEpZFMQ5GsS1Ho4+DbhlGcDZEESsT5EwjrpxjVZGYtHjgZ76p8SZ4Ig5h9iLFTrQCyJFHuIkylHFFoA0q7EsRERGjHFGinG-RXH6pxiZ7bh4piB1IVh9LKBZJhoXoboViSAoDUgKq2YAR2beZsBfA1A+CTCJA+Bwo+C9A+DorRaBa+ZYlOA4lQB4nnAElEkkl9bomUmODUm0kJD0lQDElQDoqeZZbVaBasl+C4n4lQCElcmMnMyYlkmTi+Ail0likMk8l8kUlfAykTjsmcncm8lSmqlUl+DqkcmKkSnKm6mRDYnCk0nqninakqnmn6lyk0mJDqm2lmm5AWmOmalinqk6mVYslsmik2nRZJbol6lCmemBlKm+nqn+mWlek2mSkdYCmTjhnylGkJmml+nqkRkKkZm+kOYsnqnxlRl2nukOmGlamJkFkem4nWkllumxk5kJAulVmYk1lOm5k+mlmNlplanql+ntnFkmmknVZuaA5dICpyjoBoAgBIkok2aBbonQbLl8krlSlrlFxLmrnbnrk7lNaCAYkbk7lrlRbJmHnHl7muZnlHm7lukRb8lbm3knmZb7lUDnm3n3mfn+bXmXmFZfkPkHnPl-kvn9kvlgUAVQAhmAUXlPl7mgWwUIWNbwU3k3mfnIUwWNZXmPkoXgWvmBY4XAV-noV3m4XEX-nkXfmPkUWEWnmhm4UgWjn9b3HwkVgUqSGaI9Q+D1LqGcJtQ0oVhMpGhzoETGpDLkr1JwD1GUDCXgSiUb4UqeFnHwhtFzH6qzEvY1r9QtqzptTbQLRYIBGHQLFvTQACUmrroAAaGl0WAAmtZdVlOS7LRt0VAFjggCZNVnGGkmktZQqm5jSlZfjLBg1BZexeOIhqTFABZc1EVKsuWlAHZUFZamuDZWFTKtWn7ClTFQ2gKkjMCYmIJX4ZQKFcmYIKlaVVQGZtObOcifkqbNVYJtFYJjZXgDKQeasoibVbXI5TOY1a1ROC1X7MWl5WknlVQFgmZWJVgBZfnA1XySNZhglSBk9jBpaohvFZNfJTZbNU5X7NBgtZnj1c5TghcQPL5sNd5UjOWN5eCWCOtENJtMoBQZkpkLzOCDmAKNZpOEBXqbGamQaQsupD6GiG4HIGJAqtBrSZDXyVDfKZDYDpyupDyBoKpm+D0hoMABStscgNpTJS7ijQiGjVEBjUyjJfylNfUiWKenCV+sjajT6OjcAIVVFfZUaEdS9nqMIYFTgnmrqAAGIr4v6xUCpFrJUx4+TWXxUTj9odWJhzl1VWwTjvWSh2oC2r6hz1W7UVXFp02E0M3E1M3mWnzA3RFg3aAThq1lpSVUBXVRXMVfoACi5OX1lylAowDgfE7y9giItxqQRoeQOI6EftlAPQPtbgdxRo2wgdng7yLwYdEdlACQHtQd7ycKDgNx4dwdXJydMdRo6K6dvtOK9t6kGYTtcQ01AVL2yGZdeAdqFltt3NS0FqYtz4JUltCUa4DoxBwA8VXdQtOVQysMNddqfdPdp0J0h0jdvFK0+qpd5OFKbU5N8lFlJYRlb64JiNhgJK24qg6A40lK7xNKB9OCjh4GVsmex9S0p14GHsmec95dlNgJQdyGzd5q29u9M5WAutRNGNFKxYbMmer979tMn939+tv9lNVcWWG956X691w0o040zxBCrxWxh9Cqxxmm8qlkRoWOGJUEIASMeDBDAD+qQRjUKxexREmDTRT9ngyG8Dm0IABx4UmDwDe9E0q9A6jDiDLD2UCmUgcgO9IDSDxYLqdSPDY0mylOZS9e8YeBuwzEHGzURm6kkjzD4R2UvxGx-xv0BDSaca8R1+7xnNJ6nAaDPN8VJKwAOYoJIGa47dotJa4tZayG7dDhsM6jfDtRCMIinSCg1IIxNjbgXDh0XjmjPjW2IirF-jhAgT1jOYUDdRi1xlNNXSAT+S6x6DyArFmDdRCyQAA](https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvLAhgJ2HAPASQHZgCuwAfAFBSVQD01AegPxmiSwBMSqGbuBx5VGvSZkytcVAAq4aCAD2hNFACWfYFAAWENBABczGVHxF1yAAYBxFAFtocXVADMUAEYAbQhAA0UACxQdABMAbigEIJ8OAHMdCDwfADZXDwhQ6Ni8MitbKDYHBHdPSKgYiDjQ51K4n39C7zCAiBCGqviGuqybaEcHAA4SjMTkotyABkbmgFZh+v8IsMqM0OnWn3CmzpzffIGytud5pLqK3eqoJKCT1bDpurW5jezoSYcLprWZn0W9tM+G+fSezMolEtCgAAkIG5IGgAM5QABmciUsLkbgAbqoolBgFooGB0MB4XIETi8WA0HJ3BBrGQIAAPMDI9QsaAwQnYSQkTgAZTR6Ig7IwnPIBlYfIxgo5WEkPgAwgo8OoGcA4oF4XhCNYXNpOKNuYgKFRJFAVWr4WYACQAb1UCN1ABlVBAAL4AHTwNrtuoAShBYcAXcDBAwoBKBULMFg-QGfABBQKBLAKwhKnw4WEANRQbmUSadeAgJGLRsoDgTSZTaaMWZzeZlJdEDKZGBxhgz2dzSa5nCFsIgBYgDdN9NVeHVUAA2t6lDhAiOxxPNdrtD4Z1AALJyAMAIRSC-NUGXOrQa7w9qUW4DFgyB-HGq1J7PF832+AfvnZvvR8f2gAuqWUChjeEAoKqaCSBoKB4FgV7AHuIxwL43JfhOwBoJ4QFQKMgEOCBYHaJB0GwW+IFnHAjgoaOh7oZhoY4YIeE6AREFQTBcEfmsbBUYu8K0dA9G4UYgRCYWApoE2jLMm2rCRjwPbIOGUrcA2oismG-LKcA8nyoqyrUd+x66sg+pIIBJqoRaXrno6zrup6to2UoMaBsGVChkpcnRv6wDxomyZ6T4MByAA7toWCDsWAhUOW-lVr5sCheFXKis20nqcFYVoMOyB9gOzrDpZU7rgA+nmz66gh0BFUZp4qE5UBkXgd5Lr+dXrh+LUPiuaAASGm6EG4wDKGAbggFgVU+E1PGHh1-qDfpvE-j1gGhhuC0jWN3mwgtPgftFZZHhA4micd2iggAVBdFAXVAfoUv6cREmS0CTk8c4+HBk2vtegw-e+TR9Rd1BitAcHxfCyCTrVPgw8tT7w-+l3XVAt1+sAih4PC0FQOgaAoCAUAAMZyEqKCqFiL1Th9d0+QA8gig48uhWJAyDGXoP2c45VIXVQJYXRQNZL5znztUug4wu+j5QardTgR7T5fUxUdJ1iFdN20xjaBY7jzV4wTxOk8A5N4JTuKvTTX0pJ9pF-RxgM3ezhh5YOPN5dzPZFdODWizVbUVc5Sty67zr4OBeA5ttCWTjTow+PH2F-gdUAOGJ52g1w-aDuH2iR24MryooaBPHz4N6bCBrmXzVqOS+8Vi21Lp-FLQcBrL-Wh4Wuc61HLk+JOcrF08k6jH+n0oPSAWpglQ9oCXXSTnAydF-PI9sOPUBzwvtiTo4f7J0JFkGROtfrg3-s9c3xxC3X0vt25lChl3EA9-n0cD9vI9jxPU-xavO8IBLxXlvYei8N4AJHvvQ+jFeZFTPg1C+J9uonmvikR+WFB5gN3j-Tck9p7Vi-ovZeJBIHgM3kQ3e0Cj411blvPSjcr6nDaHQlyHd3JZ3yt3JUec+4+U-tgoBuDKFAOXr-Ahs9BGTg3qQ0Ba9F7QJTg4Y+S0EH1wYZfVBzDQisJlhg5+nMuGvx4b3Au-cpwiNHhQqRYi8F-0CnIwB0iQGWMUTQ+BdCkFLXFsw-RFipHCJsZvDc+D-6OPXi4qR1DYEqMPGo3UXjDw+PmLoh+IdDE5xMe-cxWD5E4OsXk0RBSnEQLsRIshVDk4wJVrE788SlCJMMk3CYOi75t1cukuERi358NjP4wpViKlFKGc48RYTXFVKUXA5B-NPEaJmckpofjclOMCQM2xljSkhPsTPEZ+8SDK0OiIkEEgdxQlCrjHQVMtDQl1AiVMRNhqkz4lBdQbgIDqHkIQKAgQ5BU2sGBDQsJQTUCgAAOTapoKEMJgVpVbOpAAIsoKIyhTBQCRSi4AISwCTgANYQHkKSDFqLsV-mCHSKS8LDDEuAMzNAlNkD4sJei5FJKUBgHJXClk1LWVYvZZwa0RoABEowhUOFGOSygQq4BirCJKqAQq2CyrYPKoVjhZWOFVb4WVvhVWTFlZMVVCRZUJFVQAdllWa1VvRZW9FVQATllfa8lLpyUUpbNy1gEKeqSDkDS2EWAwWMJPAaMMLM8BRF9f6rAtcwVBhIG6rlMloB0qxFG3lAajR0r5gGelEavBGlqROGlk4-ycFLQW0N2aPFtKgPSPmNLU0RpdKkjpT8w15sjX6jNH8pwADoB2yhZZi7Fk56QH2isoxNlLPXQH9b6ptUQsCFobbyitWb0I5vDdiZAQqhWVs4EW+EPsXyQhQArKAA6+1zQDMrUMLlV2YtLXLM9n4Zk0sAu2+dchF29trnSlt1pX3xs-anVW51YHpwkodOl06PXJuHai2EvrvUnhlI+1FpbQ0eyVMuyg37f2SHpdYAAWtobcDZyAJskvBjmXTw48yPbM2tQbNHaCDFhINaczpoDg+lQwRHlCkfIwGpjJbk6Hr5lYo0oZpOHSY6PHwV6b2LUPOJu9UhiNkcpAGlyk6pBurEKChU1gCT0tRFjdWKNbpxnnobEkUB0Q5k8PCHaRMNBkjAoh4AJmzPKAs6OuMf5Jw7iBioWE+hUZQE1thFQpI4xIGQDuTWMWEDKHi1ALAUBktRc1gAWjSxl7kOXgaZxpb59A-nSbYvLUaRTYQ1iNYa81uATXWthHHnVgrCc2u9Za21zrlBJzdagCNxO7WJt9Ym4NqcI25vtfG1NgbBahvzZ8Gt7CS2WszeG+1jbG3Fv9Y6yt2be2zvrfO6NhbU2dv7cu3dnr22Tu7Yu69q7b2HubeO11+7v2Pt-aTgWslyNNYVZ0PCQIyLnpDoAKopai1rTG8JCu825HD3LCP0ZI9i+l3miBkDo9ujFrHOt4QFbi7zLLhPnasDBxAaNYneU+Bhxh0gnBytyFM5VgL7LJww+C5IYHVnQek3Es9FAiMlDAD+RL3NWInaZwXdurALO2NoFDbXGHQY3XUA1lFiwygBTNWACFP5cuI3wh5O1nkHASZc-B1Td5EbcTElJBbHEpv4e3UR6TygKOrd9qd1EXEUBuQ28D3EYPQKveUBJ7rHHpIA9B5D-jsMbAI-O+jwjzWceyf+7gBnqPmW0+F5dzdBX6k6cOkj7iPDYYEBFXN1EE7Nut2doPYpBvMz6lQBKoBjqcB2EeQ4DW0q-eGo+jYOw9tVea8aGjO1yfUy4BGgcK30fDU+90L725UMBXV-YR13r73Bujce7N9u13kv4QhVRR593sJBawmUAAL3qHbsz-p-koCiGbDGgQIA+1icIAiZFBn8BQxoFx8ZHkXloAERlA4R1BIdMVsZxwjZ7cv8LZ+wgCEccA3ctBCZ0BqoABHQgHMF6ZqVFdAz-WAxoAMKABzB-S-HA73OmC2NAW-fsRobWXWd3cHBaBg-A6AD-bnUmFg4Ang+EcYXHJvbGK5GkMAUAKAAAClxH83CygEIH7HnBQHhBcF0OEIMMRGRGoMqwjRiwgFIPINkIr0MDpx5C6Gr0zzrytzbyxBbxHxmSbw73r1oVrQRS7yWkbW3XHxfB9EH13zTz8PXARU8KCN5UXVCN9Cnz8Tp2jRpVHQCM3gyN51iIkyKhvQWlA3vXmiGj5gYkEA4XsMcLnwXz2m4lA0OhjCKMqLAygyEgqPFSP2swhGhV1Gl2JhzDcHqgGLkHYNMPM1JigFsFxDkHVFsNYHwnAiIjwEhFuWygSzVx8B3GDW0FDVn2cMLR-WVzjFISON-R3Coz5kKKGhk1ph2jKKKgqJn050-wcNsCcKjxlGOM7SwFOJ8CV1+MuKmWaNuMOig26Jzw+WxxcDkDRFAman4LKIcwS2K2i1RhBiTXUiWMIjYj+N2Lqh2LV1DRxNYmgjWJhDrzjBO2Sxmm-BX3bX4gPwRBzH7EhKi1zzsUEKgGpJK0xJnQQ22XxK2OywJJJOYmWLxKNGpKNFpL5iZPbTjAPx3EMzBArFRWUFJndX41YBpQrEkBQGpFqyG0Anq3azYC+BqB8EmESB8DNR8F6B8HtRmyG3NMtL8GtNtKgHtKgEdKgHtQThdKnAtKcCtKgBtPODtIdKdMezEVNMcDDIjISCjN9JjK+3NKDMnF8E9MjO9OjP9NjMiC+EzKTJTL9IDPTKLNDL8EzOTLzNTILMrNyHdOzPDMzJ9PLMLObOrNbKTMzM7KbJDITI9PDK9LNUzIrMOyHMTLHIdJmx21NLdJ7JzLrI7LTJ-lNOnJHNLPrIHPG0zOHN7NnIbMnKawgVNKPNzLXMbKnOLJOyGx3OvNPOay3N8FrLLPXLPJbOtPbPzOfKXMPJXP7M-JfO-NHKvInK7NfJXLLMzNvOXPAtXL-PnKBzdURV5TlDxhAANKNKhjq1NMTkIseyIq+xIo3MEHqzIuIuovTLgpoqotIuWwIvopYqOzjIooYoYsmye2YsYr4u4oEror4sOwEqYo4potErYrWCEpEq20EvvKnFkqkuUvYqgAXPEuEtYpItUqG04q0rEqoEov0qbOmwUqMs0pMoMt0uMsktMt4q4rkukrMocpUqssUq7Nspu2csctcu+wos8t8rssoE62B11x6M5KRPUAczBQQAAGpwU2AFcsTDAKxA1AikkA4EqxTOAKxo0jRUNCJu0UC0qzjKACqIIiqkNA0Gi6SJwbjgA7jQTVNvxxM5Zv1yrtoFopl2jwSeM0KUrEw8rKAAANVnddSgAATTGpm0wvnkJieKgAAB8GgTITs4wiYiZpry1OtQ1RrvZlMGphr0qWq11N51xhrmoioaUNMpr9qB11wJrjri1TrA4oAJrLr31eVDksJcqe1GioAjqFLBBHqgaqByssKcL3lB4sLgsLrgt3qgyKK9TExIagFZq0AQBYa8B4bsalMB11qiZvrKAplfrirhrP4YbHsCb9NbqZlJwaU8a+11M7jSaqqJqKa5rN5E5qaD90b5qZkGTMF2sr0CblZywNrVTQV1ohpNplAiYwJNTMhM5wQcwBQasoZtKvzuzhzAKazyV1IfQ0Q3A5BxJy1E4IzzbHsLaczzahdkrxQNB0t3xkUNBgBA1srkB2q2oXDHaERnaohXbo1yr01iqwUSxqNtSqUHanafQXbgAhqAbpqTs+bWc9QfC9q6b1wAAxBA+gq6pnS9e6ifHyaajTScUDZGwIVGqxScFWyUUdHOxAg+aGzm0Gq9HkX2-2wOntcxQ2twY28SScRu29UqqgMWgGvjKO6AAAUSN3VqgEFUoFGAcH4nlXsERFZNSCNDyBxAwi3soB6A3rcDZKNG2F3s8HlReCPpPsoASBXr3vlTNQcBZOPv3t9PvovqNHtWfs3pdUntnRrFnriCwGGt2tZzuKAbwFHWGvHozqWknAOpfBKmHoSnXAdF0OAA03Qbzs+sxTlkgdHWwcwdOhOkOjgYypWnbQzEgcDTahDqqtAf0whJBHtugF9R3FUHQHGlYwWTalDR4aWgqNkzHgPwEcPEFtk2XgP2oaN0DVqr4j3ruIQcHTkA4cjgxqwA7pjrjrkdkREcOmUb7XYc4Y0a0b9tjoDrdrDtkWXnZLRmhN90iu5IS1uj5MjoAeluGlGnGk2N4Z6m2I9qnGpOyzLUsiNGWvq2gkxvCanCicDLuM6MaglNxOImCcuPlMUfbU8c2hAApPCmCeMfUfGmBIP2ye8byeyh3ABNUZMZ8eLB1ylo2m8fNlN2v3jA0NKBYk82amS3UjKbGgqapIJJpL5iifGqkDGPILVzTrIFDSJLpo019RNjcGVKk2ztzoSkQfvmIfbRQfKLln6dyb6I2MVj6QRQUGpG+OWZLFgUOcGeCfMVSvOcIEuaWZzFkVOKYb6pox1LnQufeWFL8ZDRyv8mCdOPJSAA)https://www.typescriptlang.org/play?#code/C4TwDgpgBACgjFAvLAhgJ2HAPASQHZgCuwAfAFBSVQD01AegPxmiSwBMSqGbuBx5VGvSZkytcVAAq4aCAD2hNFACWfYFAAWENBABczGVHxF1yAAYBxFAFtocXVADMUAEYAbQhAA0UACxQdABMAbigEIJ8OAHMdCDwfADZXDwhQ6Ni8MitbKDYHBHdPSKgYiDjQ51K4n39C7zCAiBCGqviGuqybaEcHAA4SjMTkotyABkbmgFZh+v8IsMqM0OnWn3CmzpzffIGytud5pLqK3eqoJKCT1bDpurW5jezoSYcLprWZn0W9tM+G+fSezMolEtCgAAkIG5IGgAM5QABmciUsLkbgAbqoolBgFooGB0MB4XIETi8WA0HJ3BBrGQIAAPMDI9QsaAwQnYSQkTgAZTR6Ig7IwnPIBlYfIxgo5WEkPgAwgo8OoGcA4oF4XhCNYXNpOKNuYgKFRJFAVWr4WYACQAb1UCN1ABlVBAAL4AHTwNrtuoAShBYcAXcDBAwoBKBULMFg-QGfABBQKBLAKwhKnw4WEANRQbmUSadeAgJGLRsoDgTSZTaaMWZzeZlJdEDKZGBxhgz2dzSa5nCFsIgBYgDdN9NVeHVUAA2t6lDhAiOxxPNdrtD4Z1AALJyAMAIRSC-NUGXOrQa7w9qUW4DFgyB-HGq1J7PF832+AfvnZvvR8f2gAuqWUChjeEAoKqaCSBoKB4FgV7AHuIxwL43JfhOwBoJ4QFQKMgEOCBYHaJB0GwW+IFnHAjgoaOh7oZhoY4YIeE6AREFQTBcEfmsbBUYu8K0dA9G4UYgRCYWApoE2jLMm2rCRjwPbIOGUrcA2oismG-LKcA8nyoqyrUd+x66sg+pIIBJqoRaXrno6zrup6to2UoMaBsGVChkpcnRv6wDxomyZ6T4MByAA7toWCDsWAhUOW-lVr5sCheFXKis20nqcFYVoMOyB9gOzrDpZU7rgA+nmz66gh0BFUZp4qE5UBkXgd5Lr+dXrh+LUPiuaAASGm6EG4wDKGAbggFgVU+E1PGHh1-qDfpvE-j1gGhhuC0jWN3mwgtPgftFZZHhA4micd2iggAVBdFAXVAfoUv6cREmS0CTk8c4+HBk2vtegw-e+TR9Rd1BitAcHxfCyCTrVPgw8tT7w-+l3XVAt1+sAih4PC0FQOgaAoCAUAAMZyEqKCqFiL1Th9d0+QA8gig48uhWJAyDGXoP2c45VIXVQJYXRQNZL5znztUug4wu+j5QardTgR7T5fUxUdJ1iFdN20xjaBY7jzV4wTxOk8A5N4JTuKvTTX0pJ9pF-RxgM3ezhh5YOPN5dzPZFdODWizVbUVc5Sty67zr4OBeA5ttCWTjTow+PH2F-gdUAOGJ52g1w-aDuH2iR24MryooaBPHz4N6bCBrmXzVqOS+8Vi21Lp-FLQcBrL-Wh4Wuc61HLk+JOcrF08k6jH+n0oPSAWpglQ9oCXXSTnAydF-PI9sOPUBzwvtiTo4f7J0JFkGROtfrg3-s9c3xxC3X0vt25lChl3EA9-n0cD9vI9jxPU-xavO8IBLxXlvYei8N4AJHvvQ+jFeZFTPg1C+J9uonmvikR+WFB5gN3j-Tck9p7Vi-ovZeJBIHgM3kQ3e0Cj411blvPSjcr6nDaHQlyHd3JZ3yt3JUec+4+U-tgoBuDKFAOXr-Ahs9BGTg3qQ0Ba9F7QJTg4Y+S0EH1wYZfVBzDQisJlhg5+nMuGvx4b3Au-cpwiNHhQqRYi8F-0CnIwB0iQGWMUTQ+BdCkFLXFsw-RFipHCJsZvDc+D-6OPXi4qR1DYEqMPGo3UXjDw+PmLoh+IdDE5xMe-cxWD5E4OsXk0RBSnEQLsRIshVDk4wJVrE788SlCJMMk3CYOi75t1cukuERi358NjP4wpViKlFKGc48RYTXFVKUXA5B-NPEaJmckpofjclOMCQM2xljSkhPsTPEZ+8SDK0OiIkEEgdxQlCrjHQVMtDQl1AiVMRNhqkz4lBdQbgIDqHkIQKAgQ5BU2sGBDQsJQTUCgAAOTapoKEMJgVpVbOpAAIsoKIyhTBQCRSi4AISwCTgANYQHkKSDFqLsV-mCHSKS8LDDEuAMzNAlNkD4sJei5FJKUBgHJXClk1LWVYvZZwa0RoABEowhUOFGOSygQq4BirCJKqAQq2CyrYPKoVjhZWOFVb4WVvhVWTFlZMVVCRZUJFVQAdllWa1VvRZW9FVQATllfa8lLpyUUpbNy1gEKeqSDkDS2EWAwWMJPAaMMLM8BRF9f6rAtcwVBhIG6rlMloB0qxFG3lAajR0r5gGelEavBGlqROGlk4-ycFLQW0N2aPFtKgPSPmNLU0RpdKkjpT8w15sjX6jNH8pwADoB2yhZZi7Fk56QH2isoxNlLPXQH9b6ptUQsCFobbyitWb0I5vDdiZAQqhWVs4EW+EPsXyQhQArKAA6+1zQDMrUMLlV2YtLXLM9n4Zk0sAu2+dchF29trnSlt1pX3xs-anVW51YHpwkodOl06PXJuHai2EvrvUnhlI+1FpbQ0eyVMuyg37f2SHpdYAAWtobcDZyAJskvBjmXTw48yPbM2tQbNHaCDFhINaczpoDg+lQwRHlCkfIwGpjJbk6Hr5lYo0oZpOHSY6PHwV6b2LUPOJu9UhiNkcpAGlyk6pBurEKChU1gCT0tRFjdWKNbpxnnobEkUB0Q5k8PCHaRMNBkjAoh4AJmzPKAs6OuMf5Jw7iBioWE+hUZQE1thFQpI4xIGQDuTWMWEDKHi1ALAUBktRc1gAWjSxl7kOXgaZxpb59A-nSbYvLUaRTYQ1iNYa81uATXWthHHnVgrCc2u9Za21zrlBJzdagCNxO7WJt9Ym4NqcI25vtfG1NgbBahvzZ8Gt7CS2WszeG+1jbG3Fv9Y6yt2be2zvrfO6NhbU2dv7cu3dnr22Tu7Yu69q7b2HubeO11+7v2Pt-aTgWslyNNYVZ0PCQIyLnpDoAKopai1rTG8JCu825HD3LCP0ZI9i+l3miBkDo9ujFrHOt4QFbi7zLLhPnasDBxAaNYneU+Bhxh0gnBytyFM5VgL7LJww+C5IYHVnQek3Es9FAiMlDAD+RL3NWInaZwXdurALO2NoFDbXGHQY3XUA1lFiwygBTNWACFP5cuI3wh5O1nkHASZc-B1Td5EbcTElJBbHEpv4e3UR6TygKOrd9qd1EXEUBuQ28D3EYPQKveUBJ7rHHpIA9B5D-jsMbAI-O+jwjzWceyf+7gBnqPmW0+F5dzdBX6k6cOkj7iPDYYEBFXN1EE7Nut2doPYpBvMz6lQBKoBjqcB2EeQ4DW0q-eGo+jYOw9tVea8aGjO1yfUy4BGgcK30fDU+90L725UMBXV-YR13r73Bujce7N9u13kv4QhVRR593sJBawmUAAL3qHbsz-p-koCiGbDGgQIA+1icIAiZFBn8BQxoFx8ZHkXloAERlA4R1BIdMVsZxwjZ7cv8LZ+wgCEccA3ctBCZ0BqoABHQgHMF6ZqVFdAz-WAxoAMKABzB-S-HA73OmC2NAW-fsRobWXWd3cHBaBg-A6AD-bnUmFg4Ang+EcYXHJvbGK5GkMAUAKAAAClxH83CygEIH7HnBQHhBcF0OEIMMRGRGoMqwjRiwgFIPINkIr0MDpx5C6Gr0zzrytzbyxBbxHxmSbw73r1oVrQRS7yWkbW3XHxfB9EH13zTz8PXARU8KCN5UXVCN9Cnz8Tp2jRpVHQCM3gyN51iIkyKhvQWlA3vXmiGj5gYkEA4XsMcLnwXz2m4lA0OhjCKMqLAygyEgqPFSP2swhGhV1Gl2JhzDcHqgGLkHYNMPM1JigFsFxDkHVFsNYHwnAiIjwEhFuWygSzVx8B3GDW0FDVn2cMLR-WVzjFISON-R3Coz5kKKGhk1ph2jKKKgqJn050-wcNsCcKjxlGOM7SwFOJ8CV1+MuKmWaNuMOig26Jzw+WxxcDkDRFAman4LKIcwS2K2i1RhBiTXUiWMIjYj+N2Lqh2LV1DRxNYmgjWJhDrzjBO2Sxmm-BX3bX4gPwRBzH7EhKi1zzsUEKgGpJK0xJnQQ22XxK2OywJJJOYmWLxKNGpKNFpL5iZPbTjAPx3EMzBArFRWUFJndX41YBpQrEkBQGpFqyG0Anq3azYC+BqB8EmESB8DNR8F6B8HtRmyG3NMtL8GtNtKgHtKgEdKgHtQThdKnAtKcCtKgBtPODtIdKdMezEVNMcDDIjISCjN9JjK+3NKDMnF8E9MjO9OjP9NjMiC+EzKTJTL9IDPTKLNDL8EzOTLzNTILMrNyHdOzPDMzJ9PLMLObOrNbKTMzM7KbJDITI9PDK9LNUzIrMOyHMTLHIdJmx21NLdJ7JzLrI7LTJ-lNOnJHNLPrIHPG0zOHN7NnIbMnKawgVNKPNzLXMbKnOLJOyGx3OvNPOay3N8FrLLPXLPJbOtPbPzOfKXMPJXP7M-JfO-NHKvInK7NfJXLLMzNvOXPAtXL-PnKBzdURV5TlDxhAANKNKhjq1NMTkIseyIq+xIo3MEHqzIuIuovTLgpoqotIuWwIvopYqOzjIooYoYsmye2YsYr4u4oEror4sOwEqYo4potErYrWCEpEq20EvvKnFkqkuUvYqgAXPEuEtYpItUqG04q0rEqoEov0qbOmwUqMs0pMoMt0uMsktMt4q4rkukrMocpUqssUq7Nspu2csctcu+wos8t8rssoE62B11x6M5KRPUAczBQQAAGpwU2AFcsTDAKxA1AikkA4EqxTOAKxo0jRUNCJu0UC0qzjKACqIIiqkNA0Gi6SJwbjgA7jQTVNvxxM5Zv1yrtoFopl2jwSeM0KUrEw8rKAAANVnddSgAATTGpm0wvnkJieKgAAB8GgTITs4wiYiZpry1OtQ1RrvZlMGphr0qWq11N51xhrmoioaUNMpr9qB11wJrjri1TrA4oAJrLr31eVDksJcqe1GioAjqFLBBHqgaqByssKcL3lB4sLgsLrgt3qgyKK9TExIagFZq0AQBYa8B4bsalMB11qiZvrKAplfrirhrP4YbHsCb9NbqZlJwaU8a+11M7jSaqqJqKa5rN5E5qaD90b5qZkGTMF2sr0CblZywNrVTQV1ohpNplAiYwJNTMhM5wQcwBQasoZtKvzuzhzAKazyV1IfQ0Q3A5BxJy1E4IzzbHsLaczzahdkrxQNB0t3xkUNBgBA1srkB2q2oXDHaERnaohXbo1yr01iqwUSxqNtSqUHanafQXbgAhqAbpqTs+bWc9QfC9q6b1wAAxBA+gq6pnS9e6ifHyaajTScUDZGwIVGqxScFWyUUdHOxAg+aGzm0Gq9HkX2-2wOntcxQ2twY28SScRu29UqqgMWgGvjKO6AAAUSN3VqgEFUoFGAcH4nlXsERFZNSCNDyBxAwi3soB6A3rcDZKNG2F3s8HlReCPpPsoASBXr3vlTNQcBZOPv3t9PvovqNHtWfs3pdUntnRrFnriCwGGt2tZzuKAbwFHWGvHozqWknAOpfBKmHoSnXAdF0OAA03Qbzs+sxTlkgdHWwcwdOhOkOjgYypWnbQzEgcDTahDqqtAf0whJBHtugF9R3FUHQHGlYwWTalDR4aWgqNkzHgPwEcPEFtk2XgP2oaN0DVqr4j3ruIQcHTkA4cjgxqwA7pjrjrkdkREcOmUb7XYc4Y0a0b9tjoDrdrDtkWXnZLRmhN90iu5IS1uj5MjoAeluGlGnGk2N4Z6m2I9qnGpOyzLUsiNGWvq2gkxvCanCicDLuM6MaglNxOImCcuPlMUfbU8c2hAApPCmCeMfUfGmBIP2ye8byeyh3ABNUZMZ8eLB1ylo2m8fNlN2v3jA0NKBYk82amS3UjKbGgqapIJJpL5iifGqkDGPILVzTrIFDSJLpo019RNjcGVKk2ztzoSkQfvmIfbRQfKLln6dyb6I2MVj6QRQUGpG+OWZLFgUOcGeCfMVSvOcIEuaWZzFkVOKYb6pox1LnQufeWFL8ZDRyv8mCdOPJSAA)
